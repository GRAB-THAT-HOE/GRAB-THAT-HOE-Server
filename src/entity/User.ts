import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity("User")
export default class User extends BaseEntity {
  @PrimaryColumn()
  phone: number;

  @Column()
  permission: number; // 0이면 농장주, 1이면 일손 계정

  @Column({
    length: 50,
    nullable: false,
  })
  name: string;

  @Column({
    length: 100,
    nullable: true,
  })
  introduction: string;

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

  @Column()
  avatar?: string;
}
