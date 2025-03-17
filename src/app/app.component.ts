import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TermsModalComponent } from './modal/terms/terms-modal.component';
import { PrivacyModalComponent } from './modal/privacy/privacy-modal.component';
import { CareersModalComponent } from './modal/careers/careers-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;

  constructor(
    private modalService: NgbModal,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    // Initialize any required data
  }

  openTerms() {
    try {
      this.dialog.open(TermsModalComponent, {
        width: '800px',
        maxHeight: '90vh',
        panelClass: 'modal-custom',
        disableClose: true
      });
    } catch (error) {
      console.error('Error opening terms modal:', error);
    }
  }

  openPrivacy() {
    try {
      this.dialog.open(PrivacyModalComponent, {
        width: '800px',
        maxHeight: '90vh',
        panelClass: 'modal-custom',
        disableClose: true
      });
    } catch (error) {
      console.error('Error opening privacy modal:', error);
    }
  }

  openCareers() {
    try {
      this.dialog.open(CareersModalComponent, {
        width: '800px',
        maxHeight: '90vh',
        panelClass: 'modal-custom',
        disableClose: true
      });
    } catch (error) {
      console.error('Error opening careers modal:', error);
    }
  }
}
