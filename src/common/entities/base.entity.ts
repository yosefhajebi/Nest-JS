export abstract class BaseEntity {

  id!: number;

  createdAt!: Date;

  updatedAt!: Date;

  createdBy!: number;

  updatedBy!: number;

  isDeleted!: boolean;
   constructor() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

}