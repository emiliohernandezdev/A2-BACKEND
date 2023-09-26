import { CakeType } from "../enums/cake.enum";

export abstract class Cake{
    public readonly type: CakeType;
    public readonly ingredients: string;
    public readonly procedure: string;
    public readonly price: number;
}