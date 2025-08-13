import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-toolbar',
  templateUrl: './task-toolbar.component.html',
  styleUrls: ['./task-toolbar.component.scss']
})
export class TaskToolbarComponent {
  @Input() isTableView!: boolean;

  @Input() columns: { name: string; key: string; visible: boolean }[] = [];

  /** Event emitters for parent actions */
  @Output() createNewTask = new EventEmitter<void>();
  @Output() deleteSelectedTask = new EventEmitter<void>();
  @Output() refreshTasks = new EventEmitter<void>();
  @Output() applyFilter = new EventEmitter<void>();
  @Output() editSelectedTask = new EventEmitter<void>();
  @Output() toggleView = new EventEmitter<void>();
  @Output() exportToExcel = new EventEmitter<void>();

  toggleColumnVisibility(col: { name: string; key: string; visible: boolean }) {
    col.visible = !col.visible;
  }
}
