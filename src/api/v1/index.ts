import { Router } from "express";
import auth from "./auth";
import post from "./post";
import pin from "./pin";
import connection from "./connection";

const router = Router();

router.use("/auth", auth);
router.use("/post", post);
router.use("/pin", pin);
router.use("/connection", connection);

export default router;
