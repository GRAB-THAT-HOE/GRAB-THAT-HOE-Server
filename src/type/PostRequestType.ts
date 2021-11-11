import { Date } from "mongoose";

export default interface PostRequestType {
  title: string;
  location: string;
  explanation: string;
  salary: number;
  additionalExplanation?: string;
  isDisabled: boolean;
  isForeign: boolean;
  giveRoomAndBoard: boolean;
  giveSnack: boolean;
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
  breakTime: string;
  imgs: string[];
}
