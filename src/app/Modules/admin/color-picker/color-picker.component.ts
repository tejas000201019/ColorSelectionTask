import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/Models/Color';
import { UserListService } from 'src/app/Services/user-list.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

  listOfColors:Color[]=[];

  constructor(private userListService:UserListService){}

ngOnInit(): void {
  this.userListService.GetAllColors().subscribe((data)=>{
    this.listOfColors = data as Color[];
  });
}

AddToUser(colorItem:any){
  console.log(colorItem);
}

}
