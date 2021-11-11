import * as mongoose from "mongoose";

const postingSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  createdAt: { type: Date, required: true, default: Date.now },
  title: { type: String, required: true },
  location: { type: String, required: true },
  explanation: { type: String, required: true },
  salary: { type: Number, required: true }, // 일당
  additionalExplanation: { type: String, required: true }, // 추가 설명 사항
  isDisabled: { type: Boolean, required: true, default: false }, // 장애인 희망 여부
  isForeign: { type: Boolean, required: true, default: false }, // 외국인 희망 여부
  giveRoomAndBoard: { type: Boolean, required: true, default: false }, // 숙식 제공
  giveSnack: { type: Boolean, required: true, default: false }, // 새참 제공
  startDate: { type: Date, required: true }, // 근무 시작 기간
  endDate: { type: Date, required: true }, // 근무 마감 기간
  startTime: { type: String, required: true }, // 근무 시작 시간
  endTime: { type: String, required: true }, // 근무 마감 시간
  breakTime: { type: String, required: true }, // 휴식 시간
  imgs: [{ type: String }],
});

const Post = mongoose.model("Post", postingSchema);

export default Post;
