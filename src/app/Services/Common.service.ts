import { UserColor } from "../Models/UserColor";

export class CommonService{
    userData:UserColor;
    colorId:number;
    constructor(){}

    setUserColorData(object:any){
        this.userData = object as UserColor;
    }

    getUserColorData(){
        return this.userData;
    }

    setSelectedColorId(id:number){
        this.colorId = id as number;
    }

    getSelectedColorId(){
        return this.colorId;
    }
}