import "dotenv/config";
import * as morgan from "morgan";
import * as express from "express";
import * as cors from "cors";
import * as path from "path";
import api from "./api";
import { createConnection } from "typeorm";
import connectOptions from "../ormconfig";

const app = express();
const logger = morgan("dev");
const bodyParser = require("body-parser");

app.use(cors());
app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", api);
app.use("/public", express.static(path.join(__dirname, "../public")));

createConnection(connectOptions)
  .then((connection) => {
    console.log("✅ Connected to DB");
    app.listen(process.env.PORT, () => {
      console.log(
        `✅ Server listenting on port http://localhost:${process.env.PORT} 🚀`
      );
    });
  })
  .catch((error) => {
    console.log("❌ DB Error", error);
  });
