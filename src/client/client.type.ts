import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType('Client')
export class ClientType {
  @Field()
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  phoneNumber: string;

  @Field()
  email: string;

  @Field()
  gender: string;
}