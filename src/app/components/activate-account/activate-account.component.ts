import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss']
})
export class ActivateAccountComponent implements OnInit {
  token = '';
  loading = false;
  success = false;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'] || '';
      if (!this.token) {
        this.error = 'Invalid activation link. Please check your email for the correct link.';
      } else {
        this.activateAccount();
      }
    });
  }

  activateAccount() {
    if (!this.token || this.loading) {
      return;
    }

    this.loading = true;
    this.error = '';

    this.authService.activateAccount(this.token).subscribe({
      next: (response) => {
        this.success = true;
        this.loading = false;
        // Redirect to login after 3 seconds
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000);
      },
      error: (err) => {
        this.error = err.error?.message || 'Failed to activate account. Please try again.';
        this.loading = false;
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}




