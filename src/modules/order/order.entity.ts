import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Cake } from "../cake/cake.entity";

@Entity()
export class Order{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    customerName: string;

    @ManyToMany(() => Cake)
    @JoinTable()
    cakes: Cake[];
}