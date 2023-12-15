import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Color } from 'src/app/Models/Color';
import { UserColor } from 'src/app/Models/UserColor';
import { CommonService } from 'src/app/Services/Common.service';
import { UserListService } from 'src/app/Services/user-list.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
})
export class ColorPickerComponent implements OnInit,OnDestroy {
  listOfColors: Color[] = [];
  userData: UserColor;
  currentUser: UserColor;
  selectedColorForDelete: number;

  constructor(
    private userListService: UserListService,
    private router: Router,
    private commonService: CommonService
  ) {}
  ngOnDestroy(): void {
this.selectedColorForDelete = 0;
  }

  ngOnInit(): void {
    this.userListService.GetAllColors().subscribe((data) => {
      this.listOfColors = data as Color[];
    });
    this.currentUser = this.commonService.getUserColorData();
    this.selectedColorForDelete = this.commonService.getSelectedColorId();
    this.userListService
      .GetUserColorsById(Number(localStorage.getItem('Current_User')))
      .subscribe((data: UserColor) => {
        this.userData = data as UserColor;
      });
  }

  AddToUser(colorItem: any) {
    if (this.selectedColorForDelete) return
    let colorReq = new Color(colorItem.ColorId, colorItem.ColorName);
    if (this.userData.UserId === this.currentUser.UserId) {
      if (
        !this.userData.colors.some((item) => item.ColorId === colorReq.ColorId)
      ) {
        this.userData.colors.push(colorReq);

        this.userListService
          .UpdateUserColor(this.userData)
          .subscribe((result) => {
            if (result != null) {
              alert(result);
              this.router.navigate(['Dashboard']);
            }
          });
      } else {
        alert('Color already added for this user.');
        this.router.navigate(['Users']);
      }
    } else {
      alert('Action not allowed.');
      this.router.navigate(['Users']);
    }
  }
  deleteColor(colorItem:Color){

    if(colorItem.ColorId != String(this.selectedColorForDelete)){
      alert('Action is now Allowed.');
      return
    }
    let colorToDelete = this.selectedColorForDelete;
    let indices = [];
    if (colorToDelete == undefined || colorToDelete == 0 ){
      return
    }
    let userToUpdate:UserColor = this.userData;
    //check for indices for duplicate color
    userToUpdate.colors.forEach( (item, index) => {
      if(item.ColorId == String(colorToDelete)){
         indices.push(index);
      } 
    });
    // remove selected color
    indices.forEach( idx =>{
      userToUpdate.colors.splice(idx, 1);
    })
   console.log('userToUpdate: ', userToUpdate.colors);
   // update record.
    this.userListService.UpdateUserColor(userToUpdate).subscribe((data)=>{
      alert(data);
      this.router.navigate(['Dashboard']);
    });
  }
}
