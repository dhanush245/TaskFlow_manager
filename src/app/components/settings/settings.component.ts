import { Component, Renderer2, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class SettingsComponent implements OnInit {
  profile = {
    username: 'admin',
    email: 'admin@example.com',
    phone: '+91 98765 43210',
    location: 'Chennai, India',
    role: 'Administrator',
    notifications: true,
    darkMode: false,
    fontSize: 14,
    twoFactorEnabled: false
  };

  selectedTheme = 'default';
  themeColors = [
    { name: 'default', value: '#667eea' },
    { name: 'blue', value: '#3b82f6' },
    { name: 'green', value: '#10b981' },
    { name: 'purple', value: '#8b5cf6' },
    { name: 'orange', value: '#f59e0b' },
    { name: 'red', value: '#ef4444' }
  ];

  notificationSettings = [
    { id: 'email', title: 'Email Notifications', description: 'Receive notifications via email', icon: 'email', enabled: true },
    { id: 'push', title: 'Push Notifications', description: 'Receive push notifications in browser', icon: 'notifications_active', enabled: true },
    { id: 'task', title: 'Task Updates', description: 'Get notified about task changes', icon: 'assignment', enabled: true },
    { id: 'project', title: 'Project Updates', description: 'Receive project-related notifications', icon: 'folder', enabled: false }
  ];

  profileImageSrc: string | ArrayBuffer | null = null;
  activeSection = 'profile';
  isResetting = false;

  // Analytics Data
  analyticsData = {
    taskStats: {
      total: 45,
      completed: 32,
      inProgress: 8,
      pending: 5,
      overdue: 2
    },
    productivity: {
      dailyAverage: 6.8,
      weeklyTotal: 34,
      monthlyTotal: 142,
      completionRate: 85.2
    },
    timeTracking: {
      totalHours: 156.5,
      averagePerDay: 7.2,
      mostProductiveDay: 'Wednesday',
      leastProductiveDay: 'Sunday'
    },
    projectStats: {
      activeProjects: 8,
      completedProjects: 12,
      totalProjects: 20,
      successRate: 85.0
    },
    recentActivity: [
      { type: 'task_completed', title: 'Design Review', time: '2 hours ago', icon: 'check_circle' },
      { type: 'task_created', title: 'New Feature Development', time: '4 hours ago', icon: 'add_task' },
      { type: 'project_started', title: 'Mobile App Project', time: '1 day ago', icon: 'rocket_launch' },
      { type: 'deadline_met', title: 'Q4 Report Submission', time: '2 days ago', icon: 'schedule' },
      { type: 'collaboration', title: 'Team Meeting', time: '3 days ago', icon: 'group' }
    ],
    performanceTrends: [
      { month: 'Jan', tasks: 28, hours: 120 },
      { month: 'Feb', tasks: 32, hours: 135 },
      { month: 'Mar', tasks: 35, hours: 142 },
      { month: 'Apr', tasks: 38, hours: 148 },
      { month: 'May', tasks: 42, hours: 155 },
      { month: 'Jun', tasks: 45, hours: 156.5 }
    ]
  };

  // Chart options
  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0,0,0,0.1)'
        }
      },
      x: {
        grid: {
          color: 'rgba(0,0,0,0.1)'
        }
      }
    }
  };

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      this.profileImageSrc = savedImage;
    }
    const savedProfile = localStorage.getItem('profile');
    if (savedProfile) {
      this.profile = JSON.parse(savedProfile);
    }
    
    // Load saved theme
    try {
      const savedTheme = localStorage.getItem('selectedTheme');
      if (savedTheme) {
        this.selectedTheme = savedTheme;
      }
    } catch (error) {
      console.warn('Could not load saved theme:', error);
    }
  }

  triggerFileInput() {
    const fileInput = document.getElementById('profileImageInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  onProfileImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        try {
          this.profileImageSrc = reader.result;
        } catch (error) {
          console.warn('Error loading profile image:', error);
        }
      };

      reader.onerror = () => {
        console.warn('Error reading file');
      };

      try {
        reader.readAsDataURL(file);
      } catch (error) {
        console.warn('Error reading file:', error);
      }
    }
  }


  saveSettings() {
    alert('Settings saved:\n' + JSON.stringify(this.profile, null, 2));
  }

  // Analytics Methods
  setActiveSection(section: string) {
    this.activeSection = section;
  }

  getTaskCompletionRate(): number {
    return (this.analyticsData.taskStats.completed / this.analyticsData.taskStats.total) * 100;
  }

  getProjectSuccessRate(): number {
    return this.analyticsData.projectStats.successRate;
  }

  getProductivityScore(): number {
    return this.analyticsData.productivity.completionRate;
  }

  exportAnalyticsReport(): void {
    const report = {
      generatedAt: new Date().toISOString(),
      user: this.profile.username,
      analytics: this.analyticsData,
      summary: {
        totalTasks: this.analyticsData.taskStats.total,
        completionRate: this.getTaskCompletionRate(),
        productivityScore: this.getProductivityScore(),
        totalHours: this.analyticsData.timeTracking.totalHours
      }
    };

    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analytics-report-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  refreshAnalytics(): void {
    // Simulate data refresh
    this.analyticsData.taskStats.total += Math.floor(Math.random() * 3);
    this.analyticsData.taskStats.completed += Math.floor(Math.random() * 2);
    this.analyticsData.timeTracking.totalHours += Math.random() * 2;
    
    // Update completion rate
    this.analyticsData.productivity.completionRate = this.getTaskCompletionRate();
    
    alert('Analytics data refreshed successfully!');
  }

  getActivityIconColor(type: string): string {
    switch(type) {
      case 'task_completed': return '#10b981';
      case 'task_created': return '#3b82f6';
      case 'project_started': return '#8b5cf6';
      case 'deadline_met': return '#f59e0b';
      case 'collaboration': return '#ef4444';
      default: return '#6b7280';
    }
  }

  getActivityIconBackground(type: string): string {
    switch(type) {
      case 'task_completed': return 'rgba(16, 185, 129, 0.1)';
      case 'task_created': return 'rgba(59, 130, 246, 0.1)';
      case 'project_started': return 'rgba(139, 92, 246, 0.1)';
      case 'deadline_met': return 'rgba(245, 158, 11, 0.1)';
      case 'collaboration': return 'rgba(239, 68, 68, 0.1)';
      default: return 'rgba(107, 114, 128, 0.1)';
    }
  }

  onImageClick(): void {
    try {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = (event: any) => {
        try {
          const file = event.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
              try {
                this.profileImageSrc = e.target.result;
              } catch (error) {
                console.warn('Error setting profile image:', error);
              }
            };
            reader.onerror = () => {
              console.warn('Error reading file');
            };
            reader.readAsDataURL(file);
          }
        } catch (error) {
          console.warn('Error handling file selection:', error);
        }
      };
      input.click();
    } catch (error) {
      console.warn('Error creating file input:', error);
    }
  }

  resetSettings(): void {
    if (confirm('Are you sure you want to reset all settings to default?')) {
      this.isResetting = true;
      setTimeout(() => {
        this.profile = {
          username: 'admin',
          email: 'admin@example.com',
          phone: '+91 98765 43210',
          location: 'Chennai, India',
          role: 'Administrator',
          notifications: true,
          darkMode: false,
          fontSize: 14,
          twoFactorEnabled: false
        };
        this.isResetting = false;
        alert('Settings reset successfully!');
      }, 1000);
    }
  }

  toggleDarkMode(): void {
    this.profile.darkMode = !this.profile.darkMode;
  }

  selectTheme(themeName: string): void {
    this.selectedTheme = themeName;
    
    // Apply theme changes
    const selectedColor = this.themeColors.find(c => c.name === themeName)?.value || '#667eea';
    document.documentElement.style.setProperty('--primary-color', selectedColor);
    
    // Save to localStorage
    try {
      localStorage.setItem('selectedTheme', themeName);
    } catch (error) {
      console.warn('Could not save theme to localStorage:', error);
    }
  }

  onFontSizeChange(): void {
    // Handle font size change
  }

  changePassword(): void {
    alert('Password change functionality will be implemented here');
  }

  viewActiveSessions(): void {
    alert('Active sessions functionality will be implemented here');
  }

  exportData(): void {
    alert('Data export functionality will be implemented here');
  }

  deleteAccount(): void {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      alert('Account deletion functionality will be implemented here');
    }
  }
}
