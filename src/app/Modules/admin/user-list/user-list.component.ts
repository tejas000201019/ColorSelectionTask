import { Component, OnInit } from '@angular/core';
import { UserColor } from 'src/app/Models/UserColor';
import { UserListService } from 'src/app/Services/user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
userList:UserColor[]=[];
constructor(private userListService:UserListService){}

ngOnInit(): void {
  this.userListService.GetUserColors().subscribe((data)=>{
    this.userList = data as UserColor[];
  })
}

}
