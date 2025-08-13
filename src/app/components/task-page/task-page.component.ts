import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';
import { EditTaskDialogComponent } from '../edit-task-dialog/edit-task-dialog.component';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {
  tasks: Task[] = [];
  isTableView = true;
  selectedTaskId?: number;
  isDialogOpen = false;

  columns = [
    { name: 'Name', key: 'name', visible: true },
    { name: 'Progress', key: 'progress', visible: true },
    { name: 'Type', key: 'type', visible: true },
    { name: 'Status', key: 'status', visible: true },
    { name: 'Priority', key: 'priority', visible: true },
    { name: 'Owner', key: 'owner', visible: true }
  ];

  showColumnMenu = false; 

  constructor(
    private taskService: TaskService,
    private auth: AuthService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.refreshTasks();
  }

  refreshTasks() {
    this.tasks = this.taskService.getTasks();
  }

  toggleView() {
    this.isTableView = !this.isTableView;
  }

  createNewTask() {
    const newTask: Task = {
      id: Date.now(),
      name: 'New Task ' + (this.tasks.length + 1),
      progress: 0,
      type: 'feature',
      status: 'todo',
      priority: 'low',
      owner: 'Admin'
    };
    this.taskService.addTask(newTask);
    this.refreshTasks();
  }

  deleteSelectedTask() {
    if (this.selectedTaskId) {
      this.taskService.deleteTask(this.selectedTaskId);
      this.refreshTasks();
      this.selectedTaskId = undefined;
    } else {
      alert('Select a task to delete.');
    }
  }

  applyFilter() {
    if (this.isDialogOpen || this.dialog.openDialogs.length > 0) return;
    this.isDialogOpen = true;
    const dialogRef = this.dialog.open(FilterDialogComponent, { width: '350px', data: {} });

    dialogRef.afterClosed().subscribe(result => {
      this.isDialogOpen = false;
      if (result) {
        this.tasks = this.taskService.getTasks().filter(t => {
          return (
            (!result.status || t.status.toLowerCase() === result.status.toLowerCase()) &&
            (!result.priority || t.priority.toLowerCase() === result.priority.toLowerCase()) &&
            (!result.owner || t.owner.toLowerCase() === result.owner.toLowerCase())
          );
        });
      }
    });
  }

  editSelectedTask() {
    if (this.isDialogOpen || this.dialog.openDialogs.length > 0) return;
    if (!this.selectedTaskId) {
      alert('Select a task to edit.');
      return;
    }
    const task = this.taskService.getTasks().find(t => t.id === this.selectedTaskId);
    if (!task) return;
    const taskCopy = { ...task };
    this.isDialogOpen = true;
    const dialogRef = this.dialog.open(EditTaskDialogComponent, { width: '350px', data: { task: taskCopy } });

    dialogRef.afterClosed().subscribe(result => {
      this.isDialogOpen = false;
      if (result) {
        this.taskService.updateTask(result);
        this.refreshTasks();
      }
    });
  }

  selectTask(id: number) {
    this.selectedTaskId = id;
  }

  logout() {
    this.auth.logout();
  }

  toggleColumnVisibility(col: any) {
    col.visible = !col.visible;
  }

  exportToExcel() {
    const exportData = this.tasks.map(task => {
      const obj: any = {};
      this.columns.forEach(col => {
        if (col.visible) {
          obj[col.name] = (task as any)[col.key];
        }
      });
      return obj;
    });
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(exportData);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Tasks');
    XLSX.writeFile(wb, 'tasks.xlsx');
  }

  exportToCSV() {
    const exportData = this.tasks.map(task => {
      const obj: any = {};
      this.columns.forEach(col => {
        if (col.visible) {
          obj[col.name] = (task as any)[col.key];
        }
      });
      return obj;
    });
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(exportData);
    const csv: string = XLSX.utils.sheet_to_csv(ws);
    const blob: Blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'tasks.csv');
  }
}
