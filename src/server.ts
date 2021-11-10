import "dotenv/config";
import "./db";
import * as morgan from "morgan";
import * as express from "express";
import * as cors from "cors";
import * as path from "path";
import api from "./api";

const app = express();
const logger = morgan("dev");
const PORT = 4000;

app.use(logger);
app.use(cors());
app.use("/api", api);
app.use("/public", express.static(path.join(__dirname, "../public")));

const handleListening = () => {
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);
};

app.listen(PORT, handleListening);
