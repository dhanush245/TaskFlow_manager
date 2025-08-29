import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { MatDialog } from '@angular/material/dialog';
import { DashboardEditDialogComponent } from '../dashboard-edit-dialog/dashboard-edit-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  recentTasks: Task[] = [];
  isLoading = false;
  isAnalyticsView = false;

  constructor(
    private taskService: TaskService, 
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Check route data for analytics view
    this.route.data.subscribe(data => {
      this.isAnalyticsView = data['view'] === 'analytics';
    });
    
    this.loadRecentTasks();
  }

  /** Load last 5 tasks */
  loadRecentTasks(): void {
    this.isLoading = true;
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.recentTasks = tasks.slice(-5).reverse();
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load tasks:', err);
        this.isLoading = false;
      }
    });
  }

  /** Edit a task */
  editTask(task: Task): void {
    const dialogRef = this.dialog.open(DashboardEditDialogComponent, {
      width: '400px',
      data: { task }
    });

    dialogRef.afterClosed().subscribe(updatedTask => {
      if (updatedTask) {
        this.taskService.updateTask(updatedTask.id!, updatedTask).subscribe({
          next: () => this.loadRecentTasks(),
          error: (err) => console.error('Failed to update task:', err)
        });
      }
    });
  }

  /** Delete a task */
  deleteTask(taskId: string): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(taskId).subscribe({
        next: () => this.loadRecentTasks(),
        error: (err) => console.error('Failed to delete task:', err)
      });
    }
  }

  /** Get count of pending tasks */
  getPendingTasks(): number {
    return this.recentTasks.filter(task => task.status === 'Pending').length;
  }

  /** Get count of completed tasks */
  getCompletedTasks(): number {
    return this.recentTasks.filter(task => task.status === 'Completed').length;
  }

  /** Get count of high priority tasks */
  getHighPriorityTasks(): number {
    return this.recentTasks.filter(task => task.priority === 'High').length;
  }

  /** Get count of medium priority tasks */
  getMediumPriorityTasks(): number {
    return this.recentTasks.filter(task => task.priority === 'Medium').length;
  }

  /** Get count of low priority tasks */
  getLowPriorityTasks(): number {
    return this.recentTasks.filter(task => task.priority === 'Low').length;
  }
}
