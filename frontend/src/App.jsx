import React, { useEffect, useState } from "react";
import axios from "axios";
import PopularMovies from "./components/PopularMovies";
import Favorites from "./components/Favorites";

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // ✅ new state for search

  // ✅ Fetch genres
  const fetchGenres = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/genres");
      setGenres(res.data);
    } catch (err) {
      console.error("Error fetching genres:", err);
    }
  };

  // ✅ Fetch movies (popular, by genre, or search)
  const fetchMovies = async (page = 1) => {
    try {
      let url = "";

      if (searchQuery) {
        url = `http://localhost:5000/api/movies/search?query=${searchQuery}&page=${page}`;
      } else if (selectedGenre) {
        url = `http://localhost:5000/api/movies/by-genre?genreId=${selectedGenre}&page=${page}`;
      } else {
        url = `http://localhost:5000/api/movies/popular?page=${page}`;
      }

      const res = await axios.get(url);
      setMovies(res.data);
    } catch (err) {
      console.error("Error fetching movies:", err);
    }
  };

  // ✅ Handle search submit
  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchMovies(1);
  };

  // ✅ Genre change
  const handleGenreChange = (e) => {
    const genreId = e.target.value;
    setSelectedGenre(genreId);
    setSearchQuery(""); // clear search if selecting genre
    setCurrentPage(1);
  };

  // ✅ Pagination
  const nextPage = () => {
    const next = currentPage + 1;
    setCurrentPage(next);
    fetchMovies(next);
  };

  const prevPage = () => {
    if (currentPage === 1) return;
    const prev = currentPage - 1;
    setCurrentPage(prev);
    fetchMovies(prev);
  };

  // ✅ Favorites
  const fetchFavorites = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/favorites");
      setFavorites(res.data);
    } catch (err) {
      console.error("Error fetching favorites:", err);
    }
  };

  const addFavorite = async (movie) => {
    try {
      await axios.post("http://localhost:5000/api/favorites", {
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
      });
      alert("✅ Added to favorites!");
      fetchFavorites();
    } catch (err) {
      console.error("Error adding favorite:", err);
    }
  };

  // ✅ Initial load
  useEffect(() => {
    fetchGenres();
    fetchMovies();
    fetchFavorites();
  }, []);

  // ✅ Refetch movies whenever genre or search changes
  useEffect(() => {
    fetchMovies(currentPage);
  }, [selectedGenre, currentPage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-0">
      {/* Header Bar */}
      <header className="bg-white shadow-md py-4 px-8 flex items-center justify-between mb-8">
        <h1 className="text-3xl font-extrabold text-blue-700 tracking-tight flex items-center gap-2">
          <span className="text-blue-500"></span> TMDB Movies
        </h1>
      </header>

      <main className="max-w-6xl mx-auto px-4">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 p-3 flex-1 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow">
             Search
          </button>
        </form>

        {/* Genre Dropdown */}
        <div className="mb-6">
          <select
            onChange={handleGenreChange}
            value={selectedGenre}
            className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="">All Genres</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>

        {/* Movie Components */}
        <PopularMovies movies={movies} addFavorite={addFavorite} />

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-6 mb-10">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="bg-gray-400 text-white px-4 py-2 rounded-lg font-semibold shadow disabled:opacity-50 hover:bg-gray-500 transition-colors"
          >
            Prev
          </button>
          <span className="font-semibold text-lg text-gray-700">Page {currentPage}</span>
          <button
            onClick={nextPage}
            className="bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-800 transition-colors"
          >
            Next 
          </button>
        </div>

        {/* Favorites Section */}
        <Favorites favorites={favorites} />
      </main>
    </div>
  );
}

export default App;
