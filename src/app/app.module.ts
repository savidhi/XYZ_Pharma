import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// Component Imports
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { InvestorsComponent } from './investors/investors.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CheckcasingPipe } from './investors/checkcasing.pipe';

// Modal Components
import { TermsModalComponent } from './modal/terms/terms-modal.component';
import { PrivacyModalComponent } from './modal/privacy/privacy-modal.component';
import { CareersModalComponent } from './modal/careers/careers-modal.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'investors', component: InvestorsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'productDetail/:name', component: ProductDetailComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    InvestorsComponent,
    ProductDetailComponent,
    LoginComponent,
    RegisterComponent,
    CheckcasingPipe,
    TermsModalComponent,
    PrivacyModalComponent,
    CareersModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),  // Replace existing RouterModule import
    NgbModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    CheckcasingPipe,
    NgbActiveModal  // Add this line
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
