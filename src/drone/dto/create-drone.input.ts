import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateDroneInput {
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