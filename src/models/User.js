import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  birthYear: { type: Number, required: true },
  birthMonth: { type: Number, required: true },
  birthDay: { type: Number, required: true },
  postings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Posting" }],
});

userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 5);
  }
});

const User = mongoose.model("User", userSchema);

export default User;
