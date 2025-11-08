import express from "express";
import connectDB from "./db/connectDB.js";
import movieModel from "./models/Movies.js";
const app = express();
const PORT = process.env.PORT || 8000;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/movies";
connectDB(DATABASE_URL);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
