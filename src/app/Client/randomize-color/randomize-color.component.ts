import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Color } from 'src/app/Models/Color';
import { UserColor } from 'src/app/Models/UserColor';
import { CommonService } from 'src/app/Services/Common.service';
import { UserListService } from 'src/app/Services/user-list.service';

@Component({
  selector: 'app-randomize-color',
  templateUrl: './randomize-color.component.html',
  styleUrls: ['./randomize-color.component.css'],
})
export class RandomizeColorComponent implements OnInit {
  userList: UserColor[] = [];
  currentUserId:number;
  selectedColorToRandom
  constructor(
    private userListService: UserListService,
    private commonService: CommonService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.currentUserId = Number(localStorage.getItem('Current_User'));
    this.userListService.GetUserColors().subscribe((data) => {
      this.userList = data as UserColor[];
    });
  }
  RandomizeColor(currentUser: UserColor) {
    currentUser.colors.sort(() => Math.random() - 0.5);
    this.userListService.UpdateUserColor(currentUser).subscribe((data)=>{
      alert(data);
      this.router.navigate(['Dashboard']);
    });
  }
}
