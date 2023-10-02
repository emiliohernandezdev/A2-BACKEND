import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cake } from "../cake/cake.entity";
import { CakeFamily } from "../cakefamily/cakefamily.entity";

@Entity()
export class Family{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => CakeFamily, (cakeFamily) => cakeFamily.family)
    families: CakeFamily[];
}