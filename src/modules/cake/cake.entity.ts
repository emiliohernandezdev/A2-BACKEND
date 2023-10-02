import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cake{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2
    })
    price: number;

    @Column()
    stock: number;
}