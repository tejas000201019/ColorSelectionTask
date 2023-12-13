import { Component, OnInit } from '@angular/core';
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
export class ColorPickerComponent implements OnInit {
  listOfColors: Color[] = [];
  userData: UserColor;
  currentUser: UserColor;
  selectedColorForDelete: number;

  constructor(
    private userListService: UserListService,
    private router: Router,
    private commonService: CommonService
  ) {}

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
    let colorReq = new Color(colorItem.ColorId, colorItem.ColorName);
    console.log('Condition: ', !this.userData.colors.includes(colorReq));
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
    console.log('Color data to remove: ',colorItem);
  }
}
