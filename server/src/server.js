/* eslint-disable no-unused-vars */
import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/connection.js";

// Route module
import userRoute from "./routes/userRoute.js";
import movieRoute from "./routes/movieRoute.js";

const app = express();
dotenv.config();

app.use(express.json());

// Route
app.use("/api/user", userRoute);
app.use("/api/movie", movieRoute);

// Handling error response status
app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Sorry, server error";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(process.env.PORT, () => {
  connectDb();
  console.log("Server running on ", process.env.PORT); // Port 3001
});
