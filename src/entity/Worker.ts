import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Worker extends BaseEntity {
  @PrimaryGeneratedColumn()
  phone: number;

  @Column({
    length: 50,
    nullable: false,
  })
  name: string;

  @Column({
    length: 255,
  })
  introduction?: string;

  @Column({
    length: 50,
    nullable: false,
  })
  city: string;

  @Column({
    length: 100,
    nullable: false,
  })
  location: string;
}
