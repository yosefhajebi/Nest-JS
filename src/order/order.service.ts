import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CustomerService } from '../customer/customer.service';
import { OrderRepository } from './order.repository';
import {Order} from './entities/order.entity'

@Injectable()
export class OrderService {
  constructor(
    private readonly customerService: CustomerService,
	private readonly orderRepository: OrderRepository,
  ) {}
//async  createOrder(customerId: number) {
//    const customer = await this.customerService.findById(customerId);
//
//    if (!customer) {
//      throw new NotFoundException('Customer not found');
//    }
//    
//	const order = {
//
//  customerId: customer.id,
//
//  status: 'Created',
//
//};
//	return this.orderRepository.create(order);	
//}
  async create(dto: CreateOrderDto) {

    const customer =
      await this.customerService.findById(dto.customerId);
    
    if (!customer) {
      throw new NotFoundException('Customer not found');
    }
    
    return this.orderRepository.create({
      customerId: dto.customerId,
      description: dto.description,
      status: 'Created',
    });
    
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
