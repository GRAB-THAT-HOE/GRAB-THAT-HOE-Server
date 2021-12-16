import { Router } from "express";
import { verifyToken } from "../../../middlewares";
import createConnection from "./connection.ctrl/createConnection";

const router = Router();

router.post("/:idx", verifyToken, createConnection);

export default router;
