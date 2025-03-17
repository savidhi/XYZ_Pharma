import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-careers-modal',
  templateUrl: './careers-modal.component.html',
  styleUrls: ['./careers-modal.component.css']
})
export class CareersModalComponent {
  constructor(public dialogRef: MatDialogRef<CareersModalComponent>) {}

  close() {
    this.dialogRef.close();
  }
}