import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface Task {
  id?: number;
  name: string;
  progress: number;
  type: string;
  status: string;
  priority: string;
  owner: string;
}

@Component({
  selector: 'app-dashboard-edit-dialog',
  templateUrl: './dashboard-edit-dialog.component.html',
  styleUrls: ['./dashboard-edit-dialog.component.scss']
})
export class DashboardEditDialogComponent {
  task: Task;

  constructor(
    public dialogRef: MatDialogRef<DashboardEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { task: Task }
  ) {
    this.task = { ...data.task };
  }

  save(): void {
    this.dialogRef.close(this.task);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
