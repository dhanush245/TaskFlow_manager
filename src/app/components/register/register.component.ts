import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  
  registerForm!: FormGroup;
  errorMessage = '';
  loading = false;
  success = false;
  message = '';
  
  // Email validation properties
  emailValid = false;
  emailTouched = false;
  emailError = '';
  isEmailValidating = false;
  

  
  private emailSubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    // Set up debounced email validation
    this.emailSubject.pipe(
      debounceTime(500), // Wait 500ms after user stops typing
      distinctUntilChanged(), // Only emit if value changed
      takeUntil(this.destroy$)
    ).subscribe(email => {
      this.validateEmail(email);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // Email validation method
  validateEmail(email: string) {
    this.isEmailValidating = true;
    
    // Basic email regex pattern
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!email) {
      this.emailValid = false;
      this.emailError = '';
    } else if (!emailRegex.test(email)) {
      this.emailValid = false;
      this.emailError = 'Please enter a valid email address';
    } else {
      this.emailValid = true;
      this.emailError = '';
    }
    
    this.isEmailValidating = false;
  }

  // Handle email input changes
  onEmailChange(email: string) {
    this.emailTouched = true;
    this.emailSubject.next(email);
  }

  // Get email field CSS classes
  getEmailFieldClasses() {
    return {
      'valid': this.emailValid && this.emailTouched && !this.isEmailValidating,
      'invalid': !this.emailValid && this.emailTouched && !this.isEmailValidating,
      'validating': this.isEmailValidating
    };
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    if (this.registerForm.invalid || this.loading || !this.emailValid) return;
    this.loading = true;
    this.errorMessage = '';

    const { name, email, password } = this.registerForm.value;

    this.authService.register(name, email, password).subscribe({
      next: (res) => {
        this.loading = false;
        this.success = true;
        this.message = res.message || 'Registration successful! Please check your email to activate your account.';
        // Don't redirect automatically - let user know to check email
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = err.error?.message || 'Registration failed';
      }
    });
  }

  googleLogin() {
    if (this.loading) return;
    window.location.href = 'http://localhost:5000/api/auth/google';
  }




}
