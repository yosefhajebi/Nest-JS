import { BaseEntity } from '../../common/entities/base.entity';
export class Order extends BaseEntity {  
  customerId!: number;
  customerName!: string;
  status!: string;
}