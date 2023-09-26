import { Cake } from "../class/Cake";
import { CakeType } from "../enums/cake.enum";

//Para el patrón de diseño Abstract Factory
export interface ICakeFactory{
    createCake(type: CakeType, ingredients: string, procedure: string, price: number): Cake;
    // createBakedCake(): BakedCake;
    // createColdCake(): ColdCake;
    // createYogurtCake(): YogurtCake;
}