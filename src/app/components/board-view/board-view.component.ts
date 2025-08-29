import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

export type TaskStatus = 'todo' | 'in-progress' | 'done';

export interface Task {
  id: string;
  title: string;
  description?: string;
  owner?: string;
  status: TaskStatus;
}

@Component({
  selector: 'app-board-view',
  templateUrl: './board-view.component.html',
  styleUrls: ['./board-view.component.scss'] // optional; global styles.scss already has styling
})
export class BoardViewComponent implements OnChanges {
  @Input() tasks: Task[] = [];

  @Output() statusChanged = new EventEmitter<{ id: string; status: TaskStatus }>();
  @Output() editTask = new EventEmitter<Task>();
  @Output() deleteTask = new EventEmitter<string>();

  columns: { key: TaskStatus; title: string }[] = [
    { key: 'todo', title: 'To do' },
    { key: 'in-progress', title: 'In progress' },
    { key: 'done', title: 'Done' }
  ];

  tasksByStatus: Record<TaskStatus, Task[]> = {
    'todo': [], 'in-progress': [], 'done': []
  };

  listIds: string[] = ['list-todo', 'list-in-progress', 'list-done'];

  ngOnChanges(): void {
    this.tasksByStatus = { 'todo': [], 'in-progress': [], 'done': [] };
    for (const t of this.tasks) this.tasksByStatus[t.status].push({ ...t });
  }

  drop(event: CdkDragDrop<Task[]>, targetStatus: TaskStatus) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );

    const movedTask = event.container.data[event.currentIndex];
    if (movedTask && movedTask.status !== targetStatus) {
      movedTask.status = targetStatus;
      this.statusChanged.emit({ id: movedTask.id, status: targetStatus });
    }
  }

  onEditTask(task: Task, event: Event): void {
    event.stopPropagation();
    this.editTask.emit(task);
  }

  onDeleteTask(taskId: string, event: Event): void {
    event.stopPropagation();
    this.deleteTask.emit(taskId);
  }
}
