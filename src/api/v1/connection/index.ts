import { Router } from "express";
import { verifyToken } from "../../../middlewares";

const router = Router();

router.post("/", verifyToken);

export default router;
