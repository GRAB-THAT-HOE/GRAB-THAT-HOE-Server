export default interface PostRequestType {
  title: string;
  mainlocation: string;
  sublocation: string;
  explanation: string;
  salary: number;
  additionalExplanation?: string;
  isDisabled: boolean;
  isForeign: boolean;
  giveRoomAndBoard: boolean;
  giveSnack: boolean;
  startDateYear: number;
  startDateMonth: number;
  startDateDay: number;
  endDateYear: number;
  endDateMonth: number;
  endDateDay: number;
  startTime: number;
  endTime: number;
  breakTime: number;
  img: string;
}
