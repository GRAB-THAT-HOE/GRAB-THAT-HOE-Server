import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();
const logger = morgan("dev");

app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use("/", (req, res) => {
  return res.send("Hi!!!");
});

export default app;
