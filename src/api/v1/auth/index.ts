import { Router } from "express";
//import { upload } from "../../../middlewares";
import getPhone from "./auth.ctrl/getPhone";
import join from "./auth.ctrl/join";
import login from "./auth.ctrl/login";
import postPhone from "./auth.ctrl/postPhone";

const router = Router();

router.post("/join", join);
router.post("/login", login);
router.get("/phone/:phone", getPhone);
router.post("/phone/:phone", postPhone);

export default router;
