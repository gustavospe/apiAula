import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("usuarios")

export class Usuario{

    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    nome!:string

    @Column()
    email!:string

    @Column()
    password!:string
}