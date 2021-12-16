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
  mainlocation: string;

  @Column({
    length: 255,
    nullable: false,
  })
  sublocation: string;

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
  startDateYear: number;

  @Column({
    nullable: false,
  })
  startDateMonth: number;

  @Column({
    nullable: false,
  })
  startDateDay: number;

  @Column({
    nullable: false,
  })
  endDateYear: number;

  @Column({
    nullable: false,
  })
  endDateMonth: number;

  @Column({
    nullable: false,
  })
  endDateDay: number;

  @Column({
    type: "time",
    nullable: false,
  })
  startTime: number;

  @Column({
    type: "time",
    nullable: false,
  })
  endTime: number;

  @Column({
    type: "time",
    nullable: false,
  })
  breakTime: number;

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
  isFinished: number;
}
