import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './Services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ColorApp';
  userLoggedIn: boolean = false;
  constructor(private loginService: LoginService,private router:Router) {
    //default reset user in order to redirect to Login page thru auth.
    localStorage.setItem('Current_User','');
    localStorage.setItem('User_Role','');
  }

  ngOnInit(): void {
    this.loginService.getLoggedIn().subscribe((value) => {
      this.userLoggedIn = value;
    });
  }
  LogOut(){
    localStorage.setItem('Current_User','');
    localStorage.setItem('User_Role','');
    this.loginService.setLoggedIn(false);
    this.router.navigate(['Login']);
  }
}
