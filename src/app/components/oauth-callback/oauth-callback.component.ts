import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-oauth-callback',
  template: `
    <div class="oauth-callback">
      <div class="loading-spinner">
        <div class="spinner"></div>
        <p>Completing sign in...</p>
      </div>
    </div>
  `,
  styles: [`
    .oauth-callback {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f5f5f5;
    }
    
    .loading-spinner {
      text-align: center;
    }
    
    .spinner {
      width: 40px;
      height: 40px;
      border: 4px solid #f3f3f3;
      border-top: 4px solid #3498db;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto 20px;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    p {
      color: #666;
      font-size: 16px;
    }
  `]
})
export class OauthCallbackComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // Get the token from URL parameters
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      
      if (token) {
        // Decode the JWT token to get user information
        try {
          const payload = JSON.parse(atob(token.split('.')[1]));
          const user = {
            id: payload.id,
            name: payload.name,
            email: payload.email
          };
          
          // Store the token and user data using AuthService
          this.authService.storeUserData(token, user);
          
          // Redirect to tasks page
          this.router.navigate(['/tasks']);
        } catch (error) {
          console.error('Error processing token:', error);
          this.router.navigate(['/login']);
        }
      } else {
        // No token found, redirect to login
        this.router.navigate(['/login']);
      }
    });
  }
}
