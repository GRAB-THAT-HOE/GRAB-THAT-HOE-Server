import * as mongoose from "mongoose";

const pinSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  post: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Post" },
});

const Pin = mongoose.model("Pin", pinSchema);

export default Pin;
