import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { OrderAmountType, OrdersCreditOrQrAmountType, OrderType } from './order.type';
import { Order } from './order.entity';
import { CreateOrderInput } from './dto/create-order.input';

@Resolver(() => OrderType)
export class OrderResolver {
  constructor(private orderService: OrderService) {}

  @Query(() => [OrderType])
  async orders(): Promise<Order[]> {
    return this.orderService.findAll();
  }

  @Query(() => OrderType)
  async order(@Args('id') id: string): Promise<Order> {
    return this.orderService.findOne(id);
  }

  @Mutation(() => OrderType)
  async createOrder(
    @Args('createOrderInput') createOrderInput: CreateOrderInput,
  ): Promise<Order> {
    return this.orderService.createOrder(createOrderInput);
  }

  @Query(() => OrderAmountType)
  async getOrdersAmountType() : Promise<OrderAmountType> {
    return this.orderService.OrderAmount()
  }

  @Query(() => OrdersCreditOrQrAmountType)
  async getOrdersCreditOrQrCodeAmount() : Promise<OrdersCreditOrQrAmountType> {
    return this.orderService.CreditCardAndQrCodeAmount()
  }
}
