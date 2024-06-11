import { Field, ObjectType, ID, Float, Int } from '@nestjs/graphql';
import { ClientType } from 'src/client/client.type';
import { DroneType } from 'src/drone/drone.type';

@ObjectType('Order')
export class OrderType {
  @Field(() => ID)
  id: string;

  @Field()
  user: string;

  @Field(() => [String])
  products: string[];

  @Field(() => Int)
  totalAmount: number;

  @Field()
  orderDate: Date;

  @Field()
  deliveryDate: Date;

  @Field()
  status: string;

  @Field()
  address: string;
}

@ObjectType('OrderAmount')
export class OrderAmountType {
  @Field(() => Int)
  ordersAmount: number;
}

@ObjectType('OrdersCreditOrQrAmount')
export class OrdersCreditOrQrAmountType {
  @Field(() => Int)
  creditAmount: number;

  @Field(() => Int)
  qrAmount: number;
}