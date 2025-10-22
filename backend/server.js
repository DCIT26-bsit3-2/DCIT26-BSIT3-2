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

// MongoDB connection with TLS options
mongoose
  .connect(process.env.MONGO_URI, {
    tls: true,
    tlsAllowInvalidCertificates: true, // For development only
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err.message));

// MongoDB Schema and Model
const favoriteSchema = new mongoose.Schema({
  movieId: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  poster_path: String,
  release_date: String,
  addedAt: { type: Date, default: Date.now },
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

// Test route
app.get("/test", (req, res) => {
  res.json({ message: "✅ Test route is working", timestamp: new Date() });
});

// Fetch popular movies from TMDB with pagination and genre filtering
app.get("/api/movies/popular", async (req, res) => {
  try {
    const { page = 1, genre } = req.query;
    const params = { 
      api_key: process.env.TMDB_API_KEY,
      page: page
    };
    
    // Add genre filtering if provided
    if (genre) {
      params.with_genres = genre;
    }
    
    const response = await axios.get(`${TMDB_BASE_URL}/discover/movie`, {
      params: {
        ...params,
        sort_by: 'popularity.desc'
      }
    });
    
    res.json({
      results: response.data.results,
      page: response.data.page,
      total_pages: response.data.total_pages,
      total_results: response.data.total_results
    });
  } catch (err) {
    console.error("❌ Error fetching popular movies:", err.message);
    res.status(500).json({ error: "Failed to fetch movies from TMDB" });
  }
});

// Search movies from TMDB
app.get("/api/movies/search", async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ error: "Search query is required" });
    }
    const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
      params: { 
        api_key: process.env.TMDB_API_KEY,
        query: query 
      },
    });
    res.json(response.data.results);
  } catch (err) {
    console.error("❌ Error searching movies:", err.message);
    res.status(500).json({ error: "Failed to search movies" });
  }
});

// Get list of movie genres from TMDB
app.get("/api/genres", async (req, res) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/genre/movie/list`, {
      params: { api_key: process.env.TMDB_API_KEY },
    });
    res.json(response.data.genres);
  } catch (err) {
    console.error("❌ Error fetching genres:", err.message);
    res.status(500).json({ error: "Failed to fetch genres" });
  }
});

// Save favorite movie to MongoDB
app.post("/api/favorites", async (req, res) => {
  try {
    // Check if MongoDB is connected
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ error: "Database not connected. Favorites feature unavailable." });
    }

    const { id, title, poster_path, release_date } = req.body;
    
    // Check if movie already exists in favorites
    const existingFavorite = await Favorite.findOne({ movieId: id });
    if (existingFavorite) {
      return res.status(409).json({ error: "Movie already in favorites" });
    }

    const movie = new Favorite({
      movieId: id,
      title,
      poster_path,
      release_date,
    });
    
    await movie.save();
    res.status(201).json({ message: "Movie saved to favorites!", movie });
  } catch (err) {
    console.error("❌ Error saving favorite:", err.message);
    res.status(500).json({ error: "Failed to save favorite" });
  }
});

// Get all favorite movies
app.get("/api/favorites", async (req, res) => {
  try {
    // Check if MongoDB is connected
    if (mongoose.connection.readyState !== 1) {
      return res.json([]); // Return empty array if not connected
    }
    const favorites = await Favorite.find().sort({ addedAt: -1 });
    res.json(favorites);
  } catch (err) {
    console.error("❌ Error fetching favorites:", err.message);
    res.json([]); // Return empty array on error instead of 500
  }
});

// Delete favorite movie
app.delete("/api/favorites/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Favorite.findOneAndDelete({ movieId: id });
    
    if (!deleted) {
      return res.status(404).json({ error: "Favorite not found" });
    }
    
    res.json({ message: "Favorite removed successfully" });
  } catch (err) {
    console.error("❌ Error deleting favorite:", err.message);
    res.status(500).json({ error: "Failed to delete favorite" });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "✅ Server is running",
    mongodb: mongoose.connection.readyState === 1 ? "Connected" : "Disconnected",
    timestamp: new Date(),
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
