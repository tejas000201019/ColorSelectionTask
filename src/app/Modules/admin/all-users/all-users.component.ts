import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserListService } from 'src/app/Services/user-list.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  userList:User[]=[];
  UserTypeData:any;
  roleDropdownArray = [{'id':'admin','name':'Admin'},{'id':'user','name':'User'}];
constructor(private userService:UserListService){}
  ngOnInit(): void {
this.userService.GetAllUsers().subscribe((data)=>{
  this.userList = data as User[];
  this.UserTypeData = this.userList.map(x=>x.UserType);
})
  }


updateUser(userId:any,UserType:any){
    let user:User= new User(Number(userId.value),UserType.value);
    console.log('U: ',user);
    this.userService.UpdateUser(user).subscribe((resp)=>{
      alert(resp);
    })
  }
}
