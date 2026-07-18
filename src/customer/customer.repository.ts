import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CustomerRepository {

  constructor(
    private readonly prisma: PrismaService,
  ) {}

  findById(id: number) {
    return this.prisma.customer.findUnique({
      where: {
        id,
      },
    });
  }


  findAll() {
    return this.prisma.customer.findMany();
  }


  create(data: any) {
    return this.prisma.customer.create({
      data,
    });
  }

}