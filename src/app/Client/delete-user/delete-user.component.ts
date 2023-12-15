import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserListService } from 'src/app/Services/user-list.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  currentUser:number;
  constructor(private userListService:UserListService,private router:Router){}
  ngOnInit(): void {
    this.currentUser = Number(localStorage.getItem('Current_User'))
  }
  

  deleteUser(){
    this.userListService.DeleteUserById(this.currentUser).subscribe((resp)=>{
      alert(resp);
      //empty current user as current user is deleted.
      localStorage.setItem('Current_User','');
      //navigate to login page as user is deleted.
      this.router.navigate(['Login']);
    })
    
  }
}
