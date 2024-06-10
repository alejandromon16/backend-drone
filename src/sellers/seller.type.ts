import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType('Seller')
export class SellerType {
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
