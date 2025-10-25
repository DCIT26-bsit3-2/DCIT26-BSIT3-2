console.log("🟢 Running server.js from:", process.cwd());


import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const TMDB_BASE_URL = "https://api.themoviedb.org/3";

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err.message));

// MongoDB Schema and Model
const favoriteSchema = new mongoose.Schema({
  title: String,
  poster_path: String,
  release_date: String,
});
const Favorite = mongoose.model("Favorite", favoriteSchema);

// Fetch popular movies from TMDB
app.get("/api/movies/popular", async (req, res) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
      params: { api_key: process.env.TMDB_API_KEY },
    });
    res.json(response.data.results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Search movies from TMDB
app.get("/api/movies/search", async (req, res) => {
  try {
    const { query } = req.query; // Gets the 'query' parameter from the URL
    if (!query) {
      return res.status(400).json({ error: "Missing search query parameter." });
    }

    const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
      params: { 
        api_key: process.env.TMDB_API_KEY,
        query: query // Passes the user's query to TMDB
      },
    });
    // Send the search results back to the frontend
    res.json(response.data.results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Test route (add this too for confirmation)
app.get("/test", (req, res) => {
  res.send("✅ Test route is working");
});

// Save favorite movie to MongoDB
app.post("/api/favorites", async (req, res) => {
  try {
    const movie = new Favorite(req.body);
    await movie.save();
    res.json({ message: "Movie saved to favorites!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all favorite movies
app.get("/api/favorites", async (req, res) => {
  try {
    const favorites = await Favorite.find();
    res.json(favorites);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Keep this at the very bottom
app.listen(process.env.PORT, () =>
  console.log(`✅ Server running on http://localhost:${process.env.PORT}`)
);
