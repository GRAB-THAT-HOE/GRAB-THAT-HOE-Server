import { Router } from "express";
import { verifyToken } from "../../../middlewares";
import createPost from "./post.ctrl/createPost";
import editPost from "./post.ctrl/editPost";

const router = Router();

router.post("/", verifyToken, createPost);
router.post("/:idx", verifyToken, editPost);

export default router;
