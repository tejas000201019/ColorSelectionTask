import { Color } from "./Color";

export class UserColor{
    UserId:string;
    colors:Color[]
    constructor(userid:string,color:Color[]){
        this.UserId=userid;
        this.colors=color;
    }

}

