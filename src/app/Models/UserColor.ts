import { Color } from "./Color";

export class UserColor{
    UserId:number;
    colors:Color[]
    constructor(userid:number,color:Color[]){
        this.UserId=userid;
        this.colors=color;
    }

}

