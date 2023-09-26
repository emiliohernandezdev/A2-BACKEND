import { Body, Controller, Post } from "@nestjs/common";
import { CakeService } from "./cake.service";
import { CakeType } from "./enums/cake.enum";

@Controller('cake')
export class CakeController{

    constructor(private readonly service: CakeService){}

    @Post('create')
    createCake(@Body('type') type: CakeType,
    @Body('price') price: number, @Body('ingredients') ingredients: string,
    @Body('procedure') procedure: string){
        const cake = this.service.createCake(type, ingredients, procedure, price);
        return cake;
    }    
}