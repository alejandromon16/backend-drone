import { Column, Entity, ObjectIdColumn, PrimaryColumn } from "typeorm";


@Entity()
export class Drone {
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    subtitle: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    stock: number;

    @Column()
    imageUrl: string;
}