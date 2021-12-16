import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "./User";

@Entity("Connection")
export default class Connection extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => User)
  farmer: User;

  @ManyToOne(() => User)
  worker: User;

  @Column()
  @CreateDateColumn()
  createdAt: Date;
}
