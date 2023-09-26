import { Injectable } from "@nestjs/common";
import { ICakeFactory } from "./interfaces/cake.interface";
import { CakeType } from "./enums/cake.enum";
import { BakedCakeFactory } from "./factories/BakedCakeFactory";
import { ColdCakeFactory } from "./factories/ColdCakeFactory";
import { YogurtCakeFactory } from "./factories/YogurtCakeFactory";
import {Cake as CakeEntity} from "./cake.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class CakeService implements ICakeFactory{

    constructor(@InjectRepository(CakeEntity) 
    private readonly repo: Repository<CakeEntity>){}

    createCake(type: CakeType, ingredients: string, procedure: string, price: number){
        const factory = this.getFactory(type);
        const cake = factory.createCake(type, ingredients, procedure, price);
        this.repo.save(cake);
        return cake;
    }

    private getFactory(type: CakeType): ICakeFactory{
        switch(type){
            case CakeType.BAKED:
                return new BakedCakeFactory();
            case CakeType.COLD:
                return new ColdCakeFactory();
            case CakeType.YOGURT:
                return new YogurtCakeFactory();
            default:
                throw new Error('No existe una factory para el tipo especificado');
        }
    }
}