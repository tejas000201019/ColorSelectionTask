import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserListComponent,
    ColorPickerComponent,
    AllUsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    UserListComponent,
    ColorPickerComponent,
    AllUsersComponent
  ]
})
export class AdminModule { }
