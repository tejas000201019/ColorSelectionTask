import { NgModule } from '@angular/core';
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
import { DeleteUserComponent } from './Client/delete-user/delete-user.component';
import { TabsModule} from 'ngx-bootstrap/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { RandomizeColorComponent } from './Client/randomize-color/randomize-color.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    DashboardComponent,
    LoginComponent,
    DeleteUserComponent,
    RandomizeColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    ReactiveFormsModule,
    TabsModule.forRoot()
  ],
  providers: [
    UserListService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
