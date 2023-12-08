import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Client/dashboard/dashboard.component';
import { LoginComponent } from './Client/Login/login/login.component';
import { UserRegisterComponent } from './Client/user-register/user-register.component';
import { ColorPickerComponent } from './Modules/admin/color-picker/color-picker.component';
import { UserListComponent } from './Modules/admin/user-list/user-list.component';

const routes: Routes = [
  {path:'',redirectTo:'Login',pathMatch:'full'},
  {path:'Login',component:LoginComponent},
  {path:'Home',component:UserRegisterComponent},
  {path:'Dashboard',component:DashboardComponent},
  {path:'Users',component:UserListComponent},
  {path:'color-picker',component:ColorPickerComponent},
  {path:'**',component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
