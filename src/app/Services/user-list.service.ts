import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { UserColor } from '../Models/UserColor';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
userEndpoint:string='http://localhost:5038/api/all-user';
userColorEndPoint:string='http://localhost:5038/api/user-color';
availableColorEndPoint:string='http://localhost:5038/api/all-color';
  constructor(private http:HttpClient) { }

  GetAllUsers(){
    return this.http.get(`${this.userEndpoint+'/get'}`);
  }

  SaveUser(body:User){
    console.log('InService: ',`${this.userEndpoint+'/add-user'}`);
    console.log('BodyData: ',JSON.stringify(body));
    const headerData = {headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.post(`${this.userEndpoint+'/add-user'}`,JSON.stringify(body),headerData);
  }

  SaveUserColor(body:UserColor){
    const headerData = {headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.post(`${this.userColorEndPoint+'/save-user-color'}`,JSON.stringify(body),headerData);
  }

  UpdateUserColor(body:UserColor){
    let id = body.UserId;
    const headerData = {headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.put(`${this.userColorEndPoint+'/update/'+id}`,JSON.stringify(body),headerData);
  }

  GetUserColors(){
    return this.http.get(`${this.userColorEndPoint+'/get'}`);
  }
  GetUserColorsById(id:number){
    return this.http.get(`${this.userColorEndPoint+'/get-by-id/'+id}`);
  }

  GetByUserID(id:number){
    return this.http.get(`${this.userEndpoint+'/get-by-id/'+id}`);
  }
  
  GetAllColors(){
    return this.http.get(`${this.availableColorEndPoint+'/getAll'}`);
  }
  
  DeleteUserById(id:number){
    return this.http.delete(`${this.userEndpoint+'/delete-by-id/'+id}`);
  }

  UpdateUser(body:User){
    let id = body.UserId;
    const headerData = {headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.put(`${this.userEndpoint+'/update/'+id}`,JSON.stringify(body),headerData);
  }
}