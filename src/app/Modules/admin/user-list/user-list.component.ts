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
constructor(private userListService:UserListService,
  private commonService:CommonService,
  private router:Router){}

ngOnInit(): void {
  this.userListService.GetUserColors().subscribe((data)=>{
    this.userList = data as UserColor[];
  })
}
OpenColorPicker(currentUser:any){
this.commonService.setUserColorData(currentUser);
this.router.navigate(['color-picker']);
}

}
