import { Injectable } from '@nestjs/common';
//import {Order} from './entities/order.entity';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrderRepository {
 constructor(
    private readonly prisma: PrismaService,
  ) {}

  create(data: any) {
	//entity.id = this.orders.length + 1;  
    //this.orders.push(entity);
	//
    //return entity;
	 return this.prisma.order.create({
      data,
    });
  }

  findAll() {
    //return this.orders;
	return this.prisma.order.findMany({
      include: {
        customer: true,
      },
    });
  }

}