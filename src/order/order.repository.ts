import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrderRepository {
 constructor(
    private readonly prisma: PrismaService,
  ) {}

  create(data: CreateOrderDto & { status: string }) {
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