import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) { }

  onSubmit() {
    if (this.auth.login(this.username, this.password)) {
      this.router.navigate(['/tasks']);
    } else {
      this.error = 'Invalid credentials.';
    }
  }
}
