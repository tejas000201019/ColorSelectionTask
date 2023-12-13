import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { UserColor } from 'src/app/Models/UserColor';
import { UserListService } from 'src/app/Services/user-list.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService:UserListService,private router:Router){}

  UserLogin(userId){
    console.log('Login User: ',userId.value);
    this.userService.GetByUserID(userId.value).subscribe((data:User)=>{
      alert(data);
        if(data !=null){
            this.GetUserColorById(data.UserId);
        }
    });
  }

  GetUserColorById(id){
    this.userService.GetUserColorsById(id).subscribe((data:UserColor)=>{
      if(data!=null){
        //set localstorage userid
        localStorage.setItem('Current_User',String(data.UserId));
        //navigate to dashboard
        alert(data);
      this.router.navigate(['Dashboard']);
      }
    });
  }
}
