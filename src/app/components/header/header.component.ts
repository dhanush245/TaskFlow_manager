import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { trigger, transition, style, animate, state } from '@angular/animations';


interface Notification {
  id: string;
  title: string;
  message: string;
  icon: string;
  time: string;
  read: boolean;
  type: 'task' | 'project' | 'system';
}



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-30px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(30px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('slideInDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    // Notification Animations
    trigger('notificationShake', [
      state('idle', style({ transform: 'rotate(0deg)' })),
      state('shake', style({ transform: 'rotate(0deg)' })),
      transition('idle <=> shake', [
        animate('0.5s ease-in-out', style({ transform: 'rotate(-5deg)' })),
        animate('0.1s ease-in-out', style({ transform: 'rotate(5deg)' })),
        animate('0.1s ease-in-out', style({ transform: 'rotate(-3deg)' })),
        animate('0.1s ease-in-out', style({ transform: 'rotate(3deg)' })),
        animate('0.1s ease-in-out', style({ transform: 'rotate(0deg)' }))
      ])
    ]),
    trigger('notificationIcon', [
      state('idle', style({ transform: 'scale(1)', color: '#667eea' })),
      state('active', style({ transform: 'scale(1.1)', color: '#ff6b6b' })),
      transition('idle <=> active', [
        animate('0.3s ease-in-out')
      ])
    ]),
    trigger('notificationBadge', [
      transition(':enter', [
        style({ transform: 'scale(0)', opacity: 0 }),
        animate('0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)', style({ transform: 'scale(1)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.2s ease-in-out', style({ transform: 'scale(0)', opacity: 0 }))
      ])
    ]),

    trigger('notificationItem', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('0.4s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('notificationIconSpin', [
      state('idle', style({ transform: 'rotate(0deg)' })),
      state('spin', style({ transform: 'rotate(360deg)' })),
      transition('idle <=> spin', [
        animate('0.6s ease-in-out')
      ])
    ]),

  ]
})
export class HeaderComponent implements OnInit, OnDestroy {
  username = '';
  userEmail = '';
  userRole = 'Administrator';
  currentPage = 'Dashboard';
  isUserMenuOpen = false;
  
  // Notifications
  notifications: Notification[] = [];
  unreadNotifications = 0;

  private sub!: Subscription;
  private routerSub!: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.sub = this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.username = this.authService.getUsername() || '';
        this.userEmail = this.authService.getUser()?.email || '';
        this.userRole = this.authService.getUser()?.role || 'Administrator';
      } else {
        this.username = '';
        this.userEmail = '';
        this.userRole = 'Administrator';
      }
    });

    // Track current page for breadcrumb
    this.routerSub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.updateCurrentPage(event.url);
    });



    // Initialize notifications
    this.loadNotifications();
  }

  updateCurrentPage(url: string): void {
    if (url.includes('/tasks')) {
      this.currentPage = 'Tasks';
    } else if (url.includes('/dashboard')) {
      this.currentPage = 'Dashboard';
    } else if (url.includes('/settings')) {
      this.currentPage = 'Settings';
    } else if (url.includes('/board')) {
      this.currentPage = 'Board View';
    } else if (url.includes('/analytics')) {
      this.currentPage = 'Analytics';
    } else if (url.includes('/profile')) {
      this.currentPage = 'Profile';
    } else {
      this.currentPage = 'Dashboard';
    }
  }

  getBreadcrumbIcon(): string {
    switch (this.currentPage) {
      case 'Dashboard':
        return 'dashboard';
      case 'Tasks':
        return 'assignment';
      case 'Board View':
        return 'view_kanban';
      case 'Analytics':
        return 'analytics';
      case 'Settings':
        return 'settings';
      case 'Profile':
        return 'account_circle';
      default:
        return 'home';
    }
  }

  // Notification methods
  loadNotifications(): void {
    // Mock notifications - in real app, this would come from a service
    this.notifications = [
      {
        id: '1',
        title: 'New Task Assigned',
        message: 'You have been assigned a new task: "Update Dashboard Design"',
        icon: 'assignment',
        time: '2 minutes ago',
        read: false,
        type: 'task'
      },
      {
        id: '2',
        title: 'Project Update',
        message: 'Project "TaskFlow Manager" has been updated',
        icon: 'folder',
        time: '1 hour ago',
        read: false,
        type: 'project'
      },
      {
        id: '3',
        title: 'System Maintenance',
        message: 'Scheduled maintenance will occur tonight at 2 AM',
        icon: 'system_update',
        time: '3 hours ago',
        read: true,
        type: 'system'
      }
    ];
    this.updateUnreadCount();
  }

  updateUnreadCount(): void {
    this.unreadNotifications = this.notifications.filter(n => !n.read).length;
  }

  markNotificationsAsRead(): void {
    // Mark notifications as read when menu is opened
    this.notifications.forEach(n => n.read = true);
    this.updateUnreadCount();
  }

  markAllAsRead(): void {
    this.notifications.forEach(n => n.read = true);
    this.updateUnreadCount();
  }

  handleNotificationClick(notification: Notification): void {
    notification.read = true;
    this.updateUnreadCount();
    
    // Handle navigation based on notification type
    switch (notification.type) {
      case 'task':
        this.router.navigate(['/tasks']);
        break;
      case 'project':
        this.router.navigate(['/dashboard']);
        break;
      case 'system':
        // Show system notification details
        break;
    }
  }





  // User menu methods
  toggleUserMenu(): void {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }





  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }
}
