export class User{
    UserId:number;
    UserType:string;
    constructor(userid:number,type:string){
        this.UserId=userid;
        this.UserType=type;
    }
}