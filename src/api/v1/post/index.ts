import { Router } from "express";
import { verifyToken } from "../../../middlewares";
import createPost from "./post.ctrl/createPost";
import deletePost from "./post.ctrl/deletePost";
import modifyPost from "./post.ctrl/modifyPost";

const router = Router();

router.post("/", verifyToken, createPost);
router.post("/:idx", verifyToken, modifyPost);

router.delete("/:idx", verifyToken, deletePost);

export default router;
