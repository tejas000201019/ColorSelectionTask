import { UserColor } from "../Models/UserColor";

export class CommonService{
    userData:UserColor;
    constructor(){}

    setUserColorData(object:any){
        this.userData = object as UserColor;
    }

    getUserColorData(){
        return this.userData;
    }
}