import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import {
  createList,
  deleteList,
  getQueryList,
} from "../controllers/listController.js";

const router = express.Router();

router.post("/", verifyToken, createList);
router.get("/", verifyToken, getQueryList);
router.delete("/:id", verifyToken, deleteList);

export default router;
