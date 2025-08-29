import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TaskPageComponent } from './components/task-page/task-page.component';
import { EditTaskDialogComponent } from './components/edit-task-dialog/edit-task-dialog.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardEditDialogComponent } from './components/dashboard-edit-dialog/dashboard-edit-dialog.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TaskToolbarComponent } from './components/task-toolbar/task-toolbar.component';
import { TaskTableComponent } from './components/task-table/task-table.component';
import { TaskBoardComponent } from './components/task-board/task-board.component';
import { FilterDialogComponent } from './components/filter-dialog/filter-dialog.component';
import { OauthCallbackComponent } from './components/oauth-callback/oauth-callback.component';

import { AuthInterceptor } from './services/auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './guards/auth.guard';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BoardViewComponent } from './components/board-view/board-view.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { SearchService } from './services/search.service';
import { AiChatDialogComponent } from './components/ai-chat-dialog/ai-chat-dialog.component';
import { FloatingAiAssistantComponent } from './components/floating-ai-assistant/floating-ai-assistant.component';
import { ForgotPasswordDialogComponent } from './components/forgot-password-dialog/forgot-password-dialog.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ActivateAccountComponent } from './components/activate-account/activate-account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaskPageComponent,
    EditTaskDialogComponent,
    DashboardComponent,
    DashboardEditDialogComponent,
    SettingsComponent,
    TaskToolbarComponent,
    TaskTableComponent,
    TaskBoardComponent,
    FilterDialogComponent,
    NavbarComponent,
    RegisterComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    SidebarComponent,
    HeaderComponent,
    BoardViewComponent,
    OauthCallbackComponent,
    AnalyticsComponent,
    AiChatDialogComponent,
    FloatingAiAssistantComponent,
    ForgotPasswordDialogComponent,
    ResetPasswordComponent,
    ActivateAccountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,

    // Angular Material Modules
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatTableModule,
    MatSelectModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatSliderModule,
    DragDropModule
  ],
  providers: [
    AuthGuard,
    SearchService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
