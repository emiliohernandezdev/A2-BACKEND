import { Injectable } from "@nestjs/common";
import { ICakeFactory } from "../interfaces/cake.interface";
import { BakedCake } from "../class/BakedCake";
import { CakeType } from "../enums/cake.enum";

@Injectable()
export class BakedCakeFactory implements ICakeFactory{

    createCake(type: CakeType, ingredients: string, procedure: string, price: number): BakedCake {
        const cake = new BakedCake(ingredients, procedure, price);
        return cake;
    }
}