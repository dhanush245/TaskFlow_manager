import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
})
export class FilterDialogComponent {
  status: string = '';
  priority: string = '';
  owner: string = '';

  constructor(
    public dialogRef: MatDialogRef<FilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  applyFilter() {
    this.dialogRef.close({
      status: this.status,
      priority: this.priority,
      owner: this.owner,
    });
  }

  cancel() {
    this.dialogRef.close();
  }
}
