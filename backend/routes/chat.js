import { Router } from "express";
import { handleChat } from "../controllers/chatController.js";

const router = Router();

// POST / - Accepts { message, language } and returns { reply, disclaimer }
router.post("/", handleChat);

export default router;
