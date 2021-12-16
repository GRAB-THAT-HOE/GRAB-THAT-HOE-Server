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

  @ManyToOne(() => User, { onUpdate: "CASCADE", onDelete: "CASCADE" })
  farmer: User;

  @ManyToOne(() => User, { onUpdate: "CASCADE", onDelete: "CASCADE" })
  worker: User;

  @Column()
  @CreateDateColumn()
  createdAt: Date;
}
