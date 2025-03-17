import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoggedInGuard } from './guards/logged-in.guard';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { InvestorsComponent } from './investors/investors.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [LoggedInGuard] },
  { path: 'aboutus', component: AboutUsComponent, canActivate: [LoggedInGuard] },
  { path: 'products', component: ProductsComponent, canActivate: [LoggedInGuard] },
  { path: 'investors', component: InvestorsComponent, canActivate: [LoggedInGuard] },
  { path: 'productDetail/:name', component: ProductDetailComponent, canActivate: [LoggedInGuard] },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
