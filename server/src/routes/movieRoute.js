import express from "express";
import {
  addMovie,
  deleteMovie,
  updateMovie,
  getMovie,
  getRandomMovie,
  getMovies,
} from "../controllers/movieController.js";

const router = express.Router();

router.post("/", addMovie);
router.get("/", getMovies);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);
router.get("/find/:id", getMovie);
router.get("/random", getRandomMovie);

export default router;
