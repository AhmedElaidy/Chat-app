import express from "express";
import {
  deleteMessage,
  getMessages,
  sendMessage,
} from "../controllers/message.controller";
import protectRoute from "../middleware/protectRoute";

const router = express.Router();

router.get("/:id", protectRoute, getMessages);

router.post("/:id", protectRoute, sendMessage);

router.delete("/:messageId", protectRoute, deleteMessage);

export default router;
