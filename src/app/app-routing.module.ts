import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Client/dashboard/dashboard.component';
import { DeleteUserComponent } from './Client/delete-user/delete-user.component';
import { LoginComponent } from './Client/Login/login/login.component';
import { RandomizeColorComponent } from './Client/randomize-color/randomize-color.component';
import { UserRegisterComponent } from './Client/user-register/user-register.component';
import { authGuard } from './Guards/auth.guard';
import { authorizedGuard } from './Guards/authorized.guard';
import { AllUsersComponent } from './Modules/admin/all-users/all-users.component';
import { ColorPickerComponent } from './Modules/admin/color-picker/color-picker.component';
import { UserListComponent } from './Modules/admin/user-list/user-list.component';

const routes: Routes = [
  {path:'',redirectTo:'Login',pathMatch:'full'},
  {path:'Login',component:LoginComponent},
  {path:'Home',component:UserRegisterComponent},
  {path:'Dashboard',component:DashboardComponent,canActivate:[authGuard]},
  // {path:'Users',component:UserListComponent,canActivate:[authGuard,authorizedGuard], data:{role:'admin'}},
  {path:'Users',component:UserListComponent,canActivate:[authGuard]},
  {path:'color-picker',component:ColorPickerComponent,canActivate:[authGuard]},
  {path:'randomize-color',component:RandomizeColorComponent,canActivate:[authGuard]},
  {path:'all-users',component:AllUsersComponent,canActivate:[authGuard,authorizedGuard]},
  {path:'delete-user',component:DeleteUserComponent,canActivate:[authGuard]},
   {path:'**',component:AppComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
