import * as mongoose from "mongoose";

const connectionSchema = new mongoose.Schema({
  farmer: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  worker: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  post: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Post" },
  createdAt: { type: Date, required: true, default: Date.now },
});

const Connection = mongoose.model("Connection", connectionSchema);

export default Connection;
