import {Entity, PrimaryGeneratedColummn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColummn()
    'id': number;

    @Column()
    'name' : string
}