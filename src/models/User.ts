import bcrypt from "bcrypt";
import * as mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  introduction: { type: String, required: true },
  birthYear: { type: Number, required: true },
  birthMonth: { type: Number, required: true },
  birthDay: { type: Number, required: true },
  permission: { type: Number, required: true }, // 0이면 농장주, 1이면 일손 계정
  postings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Posting" }],
});

const User = mongoose.model("User", userSchema);

export default User;
