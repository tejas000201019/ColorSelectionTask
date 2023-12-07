import { Component, OnInit } from '@angular/core';
import { UserColor } from 'src/app/Models/UserColor';
import { UserListService } from 'src/app/Services/user-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
userList:UserColor;
  constructor(private userService:UserListService){}
  ngOnInit(): void {
    //get userid from localstorage.
    let currentUser =  localStorage.getItem('Current_User');
    this.userService.GetUserColorsById(Number(currentUser)).subscribe((data)=>{
      this.userList = data as UserColor;
    });
  }


}
