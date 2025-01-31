import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { InvestorsComponent } from './investors/investors.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckcasingPipe } from './investors/checkcasing.pipe';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table'  
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    InvestorsComponent,
    ProductDetailComponent,
    CheckcasingPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [CheckcasingPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
