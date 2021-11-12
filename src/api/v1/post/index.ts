import { Router } from "express";
import { verifyToken } from "../../../middlewares";
import createPost from "./post.ctrl/createPost";
import deletePost from "./post.ctrl/deletePost";
import getMyPosts from "./post.ctrl/getMyPosts";
import modifyPost from "./post.ctrl/modifyPost";

const router = Router();

router.get("/my", getMyPosts);

router.post("/", verifyToken, createPost);

router.put("/:idx", verifyToken, modifyPost);

router.delete("/:idx", verifyToken, deletePost);

export default router;
