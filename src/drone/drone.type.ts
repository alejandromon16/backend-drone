import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType('Drone')
export class DroneType{
    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    subtitle: string;

    @Field()
    description: string;

    @Field()
    price: number;

    @Field()
    stock: number;

    @Field()
    imageUrl: string;
}