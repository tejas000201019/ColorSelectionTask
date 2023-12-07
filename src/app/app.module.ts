import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './Modules/admin/admin.module';
import {HttpClientModule} from '@angular/common/http'
import { UserListService } from './Services/user-list.service';
import { CommonService } from './Services/Common.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule
  ],
  providers: [
    UserListService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
