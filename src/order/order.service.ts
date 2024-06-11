import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderInput } from './dto/create-order.input';
import { Order } from './order.entity';
import { v4 as uuid } from 'uuid';


@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  async createOrder(createOrderInput: CreateOrderInput): Promise<Order> {
    const order = this.orderRepository.create({
      orderDate: new Date(),
      deliveryDate: new Date(),
      id: uuid(),
      address: createOrderInput.address,
      status: 'pendiente',
      totalAmount: createOrderInput.totalAmount
    });
    return this.orderRepository.save(order);
  }

  async findAll(): Promise<Order[]> {
    return this.orderRepository.find({ relations: ['user', 'products'] });
  }

  async findOne(id: string): Promise<Order> {
    return this.orderRepository.findOne(id, { relations: ['user', 'products'] });
  }

  async OrderAmount() : Promise<{ordersAmount: number}> {
    const orders  = await this.orderRepository.find({})
    return {
      ordersAmount: orders.length || 0
    }
  }

  async CreditCardAndQrCodeAmount() : Promise<{creditAmount: number, qrAmount: number}> {
    const ordersCredit = await this.orderRepository.find({
      where: {
        status: "CREDITO"
      }
    })

    const ordersQr = await this.orderRepository.find({
      where: {
        status: "QR"
      }
    })

    return {
      creditAmount: ordersCredit.length,
      qrAmount: ordersQr.length
    }
  }
}
