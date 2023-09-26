import { Injectable } from "@nestjs/common";
import { ICakeFactory } from "../interfaces/cake.interface";
import { ColdCake } from "../class/ColdCake";
import { CakeType } from "../enums/cake.enum";

@Injectable()
export class ColdCakeFactory implements ICakeFactory{
    
    createCake(type: CakeType, ingredients: string, procedure: string, price: number): ColdCake {
        const cake = new ColdCake(ingredients, procedure, price);
        return cake;
    }

}