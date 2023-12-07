import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ColorPickerComponent } from './Modules/admin/color-picker/color-picker.component';
import { UserListComponent } from './Modules/admin/user-list/user-list.component';

const routes: Routes = [
  {path:'',component:UserListComponent},
  {path:'user-list',component:UserListComponent},
  {path:'color-picker',component:ColorPickerComponent},
  {path:'**',component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
