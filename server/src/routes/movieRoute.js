import express from "express";
import {
  addMovie,
  deleteMovie,
  updateMovie,
  getMovie,
  getRandomMovie,
  getMovies,
} from "../controllers/movieController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, addMovie);
router.get("/", verifyToken, getMovies);
router.put("/:id", verifyToken, updateMovie);
router.delete("/:id", verifyToken, deleteMovie);
router.get("/find/:id", verifyToken, getMovie);
router.get("/random", verifyToken, getRandomMovie);

export default router;
