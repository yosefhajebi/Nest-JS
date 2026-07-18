import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsInt()
  customerId!: number;

  @IsString()
  @IsNotEmpty()
  description!: string;
}