import { CakeType } from "../enums/cake.enum";

export class YogurtCake{
    public readonly type: CakeType = CakeType.YOGURT;
    public readonly ingredients: string;
    public readonly procedure: string;
    public readonly price: number;

    constructor(ingredients: string, procedure: string, price: number){
        this.ingredients = ingredients;
        this.procedure = procedure;
        this.price = price;
    }
}