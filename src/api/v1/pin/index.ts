import { Router } from "express";
import postPin from "./pin.ctrl/postPin";
import { verifyToken } from "../../../middlewares";

const router = Router();

router.post("/:idx", verifyToken, postPin);

export default router;
