import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateClientInput {
    @MinLength(1)
    @Field()
    firstName: string;

    @MinLength(1)
    @Field()
    lastName: string;

    @MinLength(1)
    @Field()
    phoneNumber: string;

    @MinLength(1)
    @Field()
    email: string;

    @MinLength(1)
    @Field()
    gender: string;
}