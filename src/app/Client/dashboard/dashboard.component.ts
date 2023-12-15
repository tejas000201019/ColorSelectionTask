import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/Models/Color';
import { UserColor } from 'src/app/Models/UserColor';
import { UserListService } from 'src/app/Services/user-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
//userList:UserColor;
colorList:Color[]=[];
  constructor(private userService:UserListService){}
  ngOnInit(): void {
    //get userid from localstorage.
    let currentUser =  localStorage.getItem('Current_User');
    this.userService.GetUserColorsById(Number(currentUser)).subscribe((data:UserColor)=>{
      // this.userList = data as UserColor;
      this.colorList = data.colors;
      // let sortOrder:number[] = data.colors.map(({ ColorId }) => Number(ColorId));
      // this.colorList.sort((a, b) => sortOrder[a.ColorId] - sortOrder[b.ColorId]);
    });
  }


}
