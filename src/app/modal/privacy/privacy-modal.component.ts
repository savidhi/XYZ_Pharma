import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-privacy-modal',
  templateUrl: './privacy-modal.component.html',
  styleUrls: ['./privacy-modal.component.css']
})
export class PrivacyModalComponent {
  constructor(public dialogRef: MatDialogRef<PrivacyModalComponent>) {}

  close() {
    this.dialogRef.close();
  }
}