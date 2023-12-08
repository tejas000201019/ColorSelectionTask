import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './Modules/admin/admin.module';
import {HttpClientModule} from '@angular/common/http'
import { UserListService } from './Services/user-list.service';
import { CommonService } from './Services/Common.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegisterComponent } from './Client/user-register/user-register.component';
import { DashboardComponent } from './Client/dashboard/dashboard.component';
import { LoginComponent } from './Client/Login/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UserListService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
