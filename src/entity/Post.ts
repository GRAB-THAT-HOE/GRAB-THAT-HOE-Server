import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("post")
export default class Post extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({
    length: 50,
    nullable: false,
  })
  title: string;

  @Column({
    length: 255,
    nullable: false,
  })
  location: string;

  @Column({
    nullable: false,
  })
  salary: number;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column({
    length: 255,
  })
  explanation: string;

  @Column({
    length: 255,
  })
  additionalExplanation: string;

  @Column({
    nullable: false,
    default: false,
  })
  isDisabled: boolean;

  @Column({
    nullable: false,
    default: false,
  })
  isForeign: boolean;

  @Column({
    nullable: false,
    default: false,
  })
  giveRoomAndBoard: boolean;

  @Column({
    nullable: false,
    default: false,
  })
  giveSnack: boolean;

  @Column()
  startTime: Date;

  @Column()
  endTime: Date;
}
