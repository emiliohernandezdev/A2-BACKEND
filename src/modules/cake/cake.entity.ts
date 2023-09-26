import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cake{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    ingredients: string;

    @Column()
    price: number;
}