import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductsComponent } from './admin/products/products.component';
import { UsersComponent } from './admin/users/users.component';
import { AddproductComponent } from './admin/products/addproduct/addproduct.component';
import { EditproductComponent } from './admin/products/editproduct/editproduct.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { AuthGuard } from './auth.guard';
import { AdminguardGuard } from './adminguard.guard';

const routes: Routes = [
 
  {path: '',  pathMatch: 'full' , component : LoginComponent},
  {path: "login", component: LoginComponent},  
  {path: "register", component: RegisterComponent},  
  {path: "admin/login", component: AdminloginComponent},  
  {path: 'admin/adminregister', component : AdminregisterComponent},

  {path: 'admin/dashboard', canActivate: [AuthGuard,AdminguardGuard], component :DashboardComponent},
  {path: 'admin/products', canActivate: [AuthGuard,AdminguardGuard], component :ProductsComponent},
  {path : 'admin/products/addproduct' ,  canActivate: [AuthGuard,AdminguardGuard], component  : AddproductComponent },
  {path: 'admin/products/editproduct/:id' , canActivate: [AuthGuard,AdminguardGuard], component : EditproductComponent},

  {path: 'admin/users', canActivate: [AuthGuard,AdminguardGuard], component :UsersComponent},
 
  {path : "customer-dashboard" , canActivate: [AuthGuard], component : CustomerDashboardComponent}



];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
