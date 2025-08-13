import { Component, Input } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent {
  @Input() tasks: Task[] = [];
  statuses = ['todo', 'in-progress', 'done'];

  getTasksByStatus(status: string) {
    return this.tasks.filter(t => t.status.toLowerCase() === status.toLowerCase());
  }
}
