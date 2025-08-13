import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks: Task[] = [
    { id: 1, name: 'Setup project', progress: 100, type: 'feature', status: 'done', priority: 'high', owner: 'Admin' },
    { id: 2, name: 'Design UI', progress: 50, type: 'feature', status: 'in-progress', priority: 'medium', owner: 'Admin' }
  ];

  getTasks(): Task[] {
    return [...this.tasks];
  }

  addTask(task: Task) {
    task.id = Date.now();
    this.tasks.push(task);
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  updateTask(updated: Task) {
    const idx = this.tasks.findIndex(t => t.id === updated.id);
    if (idx > -1) this.tasks[idx] = updated;
  }

  getTasksByStatus(status: string) {
    return this.tasks.filter(t => t.status.toLowerCase() === status.toLowerCase());
  }
}
