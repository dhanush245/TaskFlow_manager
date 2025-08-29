import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { TaskService } from '../../services/task.service';
import { AnalyticsService, AnalyticsData, Activity } from '../../services/analytics.service';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

// Chart.js imports
import { Chart, ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { registerables } from 'chart.js';

// Register Chart.js components
Chart.register(...registerables);

interface Performer {
  name: string;
  completedTasks: number;
  avatar?: string;
}

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
  animations: [
    trigger('fadeInDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
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
    trigger('slideInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('pulse', [
      state('pulse', style({})),
      transition('* => pulse', [
        animate('2s ease-in-out', style({ transform: 'scale(1)' })),
        animate('2s ease-in-out', style({ transform: 'scale(1.05)' })),
        animate('2s ease-in-out', style({ transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class AnalyticsComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('completionChart', { static: false }) completionChartRef!: ElementRef;
  @ViewChild('statusChart', { static: false }) statusChartRef!: ElementRef;
  @ViewChild('priorityChart', { static: false }) priorityChartRef!: ElementRef;
  @ViewChild('activityList', { static: false }) activityListRef!: ElementRef;

  // Charts
  completionChart!: Chart;
  statusChart!: Chart;
  priorityChart!: Chart;

  // Real-time data
  totalTasks = 0;
  completedTasks = 0;
  pendingTasks = 0;
  productivityScore = 0;

  // Growth metrics
  taskGrowth = 0;
  completionGrowth = 0;
  pendingGrowth = 0;
  productivityGrowth = 0;

  // Time range
  selectedTimeRange = 'week';

  // Activity feed
  recentActivities: Activity[] = [];

  // Performance insights
  topPerformer: Performer = { name: 'John Doe', completedTasks: 0 };
  averageCompletionTime = 0;
  weeklyProgress = 0;

  // UI state
  isLoading = false;
  Math = Math; // Make Math available in template

  // Subscriptions
  private analyticsSubscription!: Subscription;
  private activitiesSubscription!: Subscription;

  constructor(
    private taskService: TaskService,
    private analyticsService: AnalyticsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.subscribeToAnalyticsData();
    this.subscribeToActivities();
  }

  ngAfterViewInit(): void {
    // Small delay to ensure DOM elements are ready
    setTimeout(() => {
      this.initializeCharts();
    }, 100);
  }

  ngOnDestroy(): void {
    if (this.analyticsSubscription) {
      this.analyticsSubscription.unsubscribe();
    }
    if (this.activitiesSubscription) {
      this.activitiesSubscription.unsubscribe();
    }

    // Destroy charts
    if (this.completionChart) {
      this.completionChart.destroy();
    }
    if (this.statusChart) {
      this.statusChart.destroy();
    }
    if (this.priorityChart) {
      this.priorityChart.destroy();
    }
  }

  private subscribeToAnalyticsData(): void {
    this.analyticsSubscription = this.analyticsService.getAnalyticsData().subscribe(
      (data: AnalyticsData) => {
        this.updateMetrics(data);
        this.updateInsights(data);
        this.updateCharts();
      }
    );
  }

  private subscribeToActivities(): void {
    this.activitiesSubscription = this.analyticsService.getActivities().subscribe(
      (activities: Activity[]) => {
        this.recentActivities = activities;
      }
    );
  }

  private updateMetrics(data: AnalyticsData): void {
    this.totalTasks = data.totalTasks;
    this.completedTasks = data.completedTasks;
    this.pendingTasks = data.pendingTasks;
    this.productivityScore = data.productivityScore;
    this.taskGrowth = data.taskGrowth;
    this.completionGrowth = data.completionGrowth;
    this.pendingGrowth = data.pendingGrowth;
    this.productivityGrowth = data.productivityGrowth;
  }

  private updateInsights(data: AnalyticsData): void {
    this.topPerformer = data.topPerformer;
    this.averageCompletionTime = data.averageCompletionTime;
    this.weeklyProgress = data.weeklyProgress;
  }

  private initializeCharts(): void {
    this.createCompletionChart();
    this.createStatusChart();
    this.createPriorityChart();
  }

  private createCompletionChart(): void {
    const ctx = this.completionChartRef.nativeElement.getContext('2d');
    
    const data = this.getCompletionChartData();
    
    this.completionChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
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
              color: 'rgba(0, 0, 0, 0.1)'
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        },
        elements: {
          line: {
            tension: 0.4
          }
        }
      }
    });
  }

  private createStatusChart(): void {
    const ctx = this.statusChartRef.nativeElement.getContext('2d');
    
    const data = this.getStatusChartData();
    
    this.statusChart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }

  private createPriorityChart(): void {
    const ctx = this.priorityChartRef.nativeElement.getContext('2d');
    
    const data = this.getPriorityChartData();
    
    this.priorityChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
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
              color: 'rgba(0, 0, 0, 0.1)'
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  }

  private updateCharts(): void {
    if (this.completionChart) {
      this.completionChart.data = this.getCompletionChartData();
      this.completionChart.update('active');
    }
    if (this.statusChart) {
      this.statusChart.data = this.getStatusChartData();
      this.statusChart.update('active');
    }
    if (this.priorityChart) {
      this.priorityChart.data = this.getPriorityChartData();
      this.priorityChart.update('active');
    }
  }

  private getCompletionChartData(): ChartData<'line'> {
    const labels = this.getTimeLabels();
    const data = this.generateCompletionData();

    return {
      labels: labels,
      datasets: [{
        label: 'Completed Tasks',
        data: data,
        borderColor: '#667eea',
        backgroundColor: 'rgba(102, 126, 234, 0.1)',
        borderWidth: 3,
        fill: true,
        pointBackgroundColor: '#667eea',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8
      }]
    };
  }

  private getStatusChartData(): ChartData<'doughnut'> {
    return {
      labels: ['Completed', 'In Progress', 'Pending'],
      datasets: [{
        data: [this.completedTasks, Math.floor(this.totalTasks * 0.3), this.pendingTasks],
        backgroundColor: [
          '#4ade80',
          '#fbbf24',
          '#f87171'
        ],
        borderWidth: 0,
        hoverOffset: 4
      }]
    };
  }

  private getPriorityChartData(): ChartData<'bar'> {
    return {
      labels: ['High', 'Medium', 'Low'],
      datasets: [{
        label: 'Tasks by Priority',
        data: [
          Math.floor(this.totalTasks * 0.2),
          Math.floor(this.totalTasks * 0.5),
          Math.floor(this.totalTasks * 0.3)
        ],
        backgroundColor: [
          '#ef4444',
          '#f59e0b',
          '#3b82f6'
        ],
        borderWidth: 0,
        borderRadius: 4
      }]
    };
  }

  private getTimeLabels(): string[] {
    switch (this.selectedTimeRange) {
      case 'week':
        return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      case 'month':
        return ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
      case 'year':
        return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      default:
        return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    }
  }

  private generateCompletionData(): number[] {
    const baseValue = this.completedTasks / 7;
    return Array.from({ length: this.getTimeLabels().length }, () => 
      Math.floor(baseValue + (Math.random() - 0.5) * baseValue * 0.5)
    );
  }

  // Public methods
  refreshData(): void {
    this.isLoading = true;
    this.analyticsService.refreshData();
    
    // Simulate loading time
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  setTimeRange(range: 'week' | 'month' | 'year'): void {
    this.selectedTimeRange = range;
    this.updateCharts();
  }
}
