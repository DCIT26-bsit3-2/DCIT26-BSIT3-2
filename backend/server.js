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

// ✅ Search movies by query
app.get("/api/movies/search", async (req, res) => {
  try {
    const { query, page } = req.query;
    const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
      params: {
        api_key: process.env.TMDB_API_KEY,
        query: query,
        page: page || 1,
      },
    });
    res.json(response.data.results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ Get list of genres
app.get("/api/genres", async (req, res) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/genre/movie/list`, {
      params: { api_key: process.env.TMDB_API_KEY },
    });
    res.json(response.data.genres);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get movies by genre (with pagination)
app.get("/api/movies/by-genre", async (req, res) => {
  try {
    const { genreId, page } = req.query;
    const response = await axios.get(`${TMDB_BASE_URL}/discover/movie`, {
      params: {
        api_key: process.env.TMDB_API_KEY,
        with_genres: genreId,
        page: page || 1,
      },
    });
    res.json(response.data.results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get popular movies with pagination
app.get("/api/movies/popular", async (req, res) => {
  try {
    const { page } = req.query;
    const response = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
      params: {
        api_key: process.env.TMDB_API_KEY,
        page: page || 1,
      },
    });
    res.json(response.data.results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ Keep this at the very bottom
app.listen(process.env.PORT, () =>
  console.log(`✅ Server running on http://localhost:${process.env.PORT}`)
);
