import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserColor } from 'src/app/Models/UserColor';
import { CommonService } from 'src/app/Services/Common.service';
import { UserListService } from 'src/app/Services/user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
userList:UserColor[]=[];
currentUserId:number;
constructor(private userListService:UserListService,
  private commonService:CommonService,
  private router:Router){}

ngOnInit(): void {
  this.currentUserId = Number(localStorage.getItem('Current_User'));
  this.userListService.GetUserColors().subscribe((data)=>{
    this.userList = data as UserColor[];
  })
}
OpenColorPicker(currentUser:any){
this.commonService.setUserColorData(currentUser);
// setting colorId as 0 to reset delete functionality for color-picker component.
this.commonService.setSelectedColorId(0);
this.router.navigate(['color-picker']);
}
onOptionsSelected(value:string){
  if(value =='' || value == undefined) return
 //let currentUser = localStorage.getItem('Current_User');

 this.commonService.setSelectedColorId(Number(value));
 this.router.navigate(['color-picker']);
}
}
