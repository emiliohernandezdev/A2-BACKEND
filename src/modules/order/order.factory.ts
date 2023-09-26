import { Cake } from "../cake/cake.entity";
import { Order } from "./order.entity";

export interface IOrderFactory{
    createOrder(customerName: string, cakes: Cake[]): Promise<Order>;
}