import { Router } from "express";
import { verifyToken } from "../../../middlewares";
import createConnection from "./connection.ctrl/createConnection";
import deleteConnection from "./connection.ctrl/deleteConnection";

const router = Router();

router.post("/:idx", verifyToken, createConnection);
router.delete("/:idx", verifyToken, deleteConnection);

export default router;
