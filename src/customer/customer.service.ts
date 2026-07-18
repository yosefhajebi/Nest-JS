import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
  create(createCustomerDto: CreateCustomerDto) {
    return 'This action adds a new customer';
  }
 private customers = [
    { id: 1, name: 'Ali' },
    { id: 2, name: 'Reza' },
  ];
  findAll() {
    //return `This action returns all customer`;
	 return this.customers;
  }

  //findOne(id: number) {
  //  return `This action returns a #${id} customer`;
  //}
  findById(id: number) {
    return this.customers.find(c => c.id === id);
  }
  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
