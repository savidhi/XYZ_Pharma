import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-terms-modal',
  templateUrl: './terms-modal.component.html',
  styleUrls: ['./terms-modal.component.css']
})
export class TermsModalComponent {
  constructor(public dialogRef: MatDialogRef<TermsModalComponent>) {}

  close() {
    this.dialogRef.close();
  }
}