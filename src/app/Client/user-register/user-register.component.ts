import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Color } from 'src/app/Models/Color';
import { User } from 'src/app/Models/User';
import { UserColor } from 'src/app/Models/UserColor';
import { UserListService } from 'src/app/Services/user-list.service';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  userForm: FormGroup;

  constructor(private router: Router, private userService: UserListService) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      UserId: new FormControl(null),
      UserType: new FormControl(null),
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      let user = new User(Number(form.value.UserId), form.value.UserType);

      this.userService.SaveUser(user).subscribe((data) => {
        console.log('ResultingData: ', data);
      });

      let userColor = new UserColor(Number(form.value.UserId),new Color[0]);
      this.userService.SaveUserColor(userColor).subscribe((userData)=>{
        console.log('UserColor: ',userData);
      })
      
      this.userForm.reset();
      localStorage.setItem('Current_User',form.value.UserId);
      this.router.navigate(['dashboard']);
    }
    return;
  }
}
