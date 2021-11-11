import { Router } from "express";
import { verifyToken } from "../../../middlewares";
import createPost from "./post.ctrl/createPost";

const router = Router();

router.post("/", verifyToken, createPost);

export default router;
