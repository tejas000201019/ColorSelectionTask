import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
userEndpoint:string='http://localhost:3000/users';
userColorEndPoint:string=' http://localhost:3000/userColors';
availableColorEndPoint:string='http://localhost:3000/AvailableColors';
  constructor(private http:HttpClient) { }

  GetAllUsers(){
    return this.http.get(`${this.userEndpoint}`);
  }

  GetUserColors(){
    return this.http.get(`${this.userColorEndPoint}`);
  }
  GetAllColors(){
    return this.http.get(`${this.availableColorEndPoint}`);
  }
}