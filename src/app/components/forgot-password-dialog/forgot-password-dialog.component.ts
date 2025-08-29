import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password-dialog',
  templateUrl: './forgot-password-dialog.component.html',
  styleUrls: ['./forgot-password-dialog.component.scss']
})
export class ForgotPasswordDialogComponent {
  email = '';
  loading = false;
  success = false;
  error = '';

  constructor(
    private dialogRef: MatDialogRef<ForgotPasswordDialogComponent>,
    private authService: AuthService
  ) {}

  submitForgotPassword() {
    if (!this.email || this.loading) {
      return;
    }

    this.loading = true;
    this.error = '';

    this.authService.forgotPassword(this.email).subscribe({
      next: (response) => {
        this.success = true;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.message || 'Failed to send reset email. Please try again.';
        this.loading = false;
      }
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
