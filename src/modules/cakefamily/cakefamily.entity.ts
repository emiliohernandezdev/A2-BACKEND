import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Family } from "../family/family.entity";

@Entity()
export class CakeFamily{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(() => Family, (family) => family)
    family: Family;
    
}