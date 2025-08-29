import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ActivateAccountComponent } from './components/activate-account/activate-account.component';

import { TaskPageComponent } from './components/task-page/task-page.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';

import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

// Layouts
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { OauthCallbackComponent } from './components/oauth-callback/oauth-callback.component';


const routes: Routes = [
  // Google OAuth callback
  { path: 'oauth/callback', component: OauthCallbackComponent },

  // Auth layout (public routes)
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
                        { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
                  { path: 'register', component: RegisterComponent, canActivate: [LoginGuard] },
                  { path: 'reset-password', component: ResetPasswordComponent },
                  { path: 'activate-account', component: ActivateAccountComponent },

    ]
  },

  // Main layout (protected routes)
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'tasks', component: TaskPageComponent },
      { path: 'board', component: TaskPageComponent, data: { viewMode: 'board' } },
      { path: 'analytics', component: AnalyticsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },

  // fallback (must be last)
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
