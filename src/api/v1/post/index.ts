import { Router } from "express";
import { upload, verifyToken } from "../../../middlewares";
import createPost from "./post.ctrl/createPost";
import deletePost from "./post.ctrl/deletePost";
import getMyPosts from "./post.ctrl/getMyPosts";
import getPost from "./post.ctrl/getPost";
import getPosts from "./post.ctrl/getPosts";
import modifyPost from "./post.ctrl/modifyPost";

const router = Router();

router.get("/", getPosts);
router.get("/my", verifyToken, getMyPosts);
router.get("/:idx", verifyToken, getPost);

router.post("/", verifyToken, upload.single("img"), createPost);

router.put("/:idx", verifyToken, modifyPost);

router.delete("/:idx", verifyToken, deletePost);

export default router;
