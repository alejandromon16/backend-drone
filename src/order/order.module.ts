import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { Order } from './order.entity';
import { Client } from 'src/client/client.entity';
import { Drone } from 'src/drone/drone.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Client, Drone])],
  providers: [OrderService, OrderResolver],
})
export class OrderModule {}
