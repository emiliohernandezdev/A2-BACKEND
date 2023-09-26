import { Injectable } from "@nestjs/common";
import { IOrderFactory } from "./order.factory";
import { Cake } from "../cake/cake.entity";
import { Order } from "./order.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class OrderService implements IOrderFactory{
    constructor(@InjectRepository(Order) 
    private readonly repo: Repository<Order>) {}

    async createOrder(customerName: string, cakes: Cake[]): Promise<Order>{
        const order = this.repo.create({
            customerName,
            cakes
        });

        return await this.repo.save(order);
    }
}