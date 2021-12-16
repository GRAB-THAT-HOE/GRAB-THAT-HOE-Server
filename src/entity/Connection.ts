import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Post from "./Post";
import User from "./User";

@Entity("Connection")
export default class Connection extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => Post, { onUpdate: "CASCADE", onDelete: "CASCADE" })
  post: Post;

  @ManyToOne(() => User, { onUpdate: "CASCADE", onDelete: "CASCADE" })
  farmer: User;

  @ManyToOne(() => User, { onUpdate: "CASCADE", onDelete: "CASCADE" })
  worker: User;

  @Column()
  @CreateDateColumn()
  createdAt: Date;
}
