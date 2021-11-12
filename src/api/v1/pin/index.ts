import { Router } from "express";
import postPin from "./pin.ctrl/postPin";

const router = Router();

router.post("/:idx", postPin);

export default router;
