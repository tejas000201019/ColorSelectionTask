import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
userEndpoint:string='http://localhost:5038/api';
userColorEndPoint:string=' http://localhost:5038/api/user-color';
availableColorEndPoint:string='http://localhost:5038/api/all-color';
  constructor(private http:HttpClient) { }

  GetAllUsers(){
    return this.http.get(`${this.userEndpoint+'/get'}`);
  }

  GetUserColors(){
    return this.http.get(`${this.userColorEndPoint+'/get'}`);
  }
  GetUserColorsById(id:string){
    return this.http.get(`${this.userColorEndPoint+'/get-by-id/'+id}`);
  }

  GetAllColors(){
    return this.http.get(`${this.availableColorEndPoint+'/getAll'}`);
  }
}