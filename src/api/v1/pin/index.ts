import { Router } from "express";
import postPin from "./pin.ctrl/postPin";
import { verifyToken } from "../../../middlewares";
import getMyPins from "./pin.ctrl/getMyPins";

const router = Router();

router.get("/my", verifyToken, getMyPins);

router.post("/:idx", verifyToken, postPin);

export default router;
