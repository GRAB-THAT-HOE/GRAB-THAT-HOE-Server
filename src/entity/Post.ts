import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "./User";

@Entity("Post")
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
  explanation?: string;

  @Column({
    length: 255,
  })
  additionalExplanation?: string;

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

  @Column({
    nullable: false,
  })
  startDate: Date;

  @Column({
    nullable: false,
  })
  endDate: Date;

  @Column({
    type: "time",
    nullable: false,
  })
  startTime: Date;

  @Column({
    type: "time",
    nullable: false,
  })
  endTime: Date;

  @Column({
    type: "time",
    nullable: false,
  })
  breakTime: Date;

  @Column()
  img: string;

  @ManyToOne(() => User)
  user: User;

  @Column({
    nullable: false,
    default: 0,
  })
  joinedPeopleNum: number;

  @Column({
    nullable: false,
    default: 0,
  })
  pinNum: number;

  @Column({
    nullable: false,
    default: 0,
  })
  isConnected: number;
}
