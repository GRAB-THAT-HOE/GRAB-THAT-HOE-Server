import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";
import User from "./User";
import Post from "./Post";

@Entity("Pin")
export default class Pin extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => User, { onUpdate: "CASCADE", onDelete: "CASCADE" })
  user: User;

  @ManyToOne(() => Post, { onUpdate: "CASCADE", onDelete: "CASCADE" })
  post: Post;

  @Column()
  @CreateDateColumn()
  createdAt: Date;
}
