import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {LoginService} from './services/login.service';
import {RegisterService} from './services/register.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductsComponent } from './admin/products/products.component';
import { UsersComponent } from './admin/users/users.component';
import { AddproductComponent } from './admin/products/addproduct/addproduct.component';
import { EditproductComponent } from './admin/products/editproduct/editproduct.component';
import {ProductsService} from './services/products.service';
import { AdminregisterComponent } from './adminregister/adminregister.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminloginComponent,
    CustomerDashboardComponent,
    JwPaginationComponent,
    DashboardComponent,
    ProductsComponent,
    UsersComponent,
    AddproductComponent,
    EditproductComponent,
    AdminregisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
		FormsModule,
    HttpClientModule,
    
    
    
		
  ],
  providers: [LoginService,RegisterService,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
