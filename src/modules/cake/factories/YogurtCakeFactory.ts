import { Injectable } from "@nestjs/common";
import { ICakeFactory } from "../interfaces/cake.interface";
import { YogurtCake } from "../class/YogurtCake";
import { CakeType } from "../enums/cake.enum";

@Injectable()
export class YogurtCakeFactory implements ICakeFactory{

    createCake(type: CakeType, ingredients: string, procedure: string, price: number): YogurtCake {
        const cake = new YogurtCake(ingredients, procedure, price);
        return cake;
    }
}