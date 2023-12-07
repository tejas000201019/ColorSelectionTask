import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';



@NgModule({
  declarations: [
    UserListComponent,
    ColorPickerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserListComponent,
    ColorPickerComponent
  ]
})
export class AdminModule { }
