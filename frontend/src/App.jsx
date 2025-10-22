import React, { useEffect, useState } from "react";
import axios from "axios";
import PopularMovies from "./assets/components/PopularMovies.jsx";
import MyFavorites from "./assets/components/MyFavorites.jsx";

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [genres, setGenres] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [favoritesLoading, setFavoritesLoading] = useState(false);

  // Fetch genres on mount
  useEffect(() => {
    axios.get("http://localhost:5000/api/genres")
      .then(res => setGenres(res.data))
      .catch(err => console.error("Error fetching genres:", err));
  }, []);

  // Fetch movies based on search, genre, and page
  useEffect(() => {
    setLoading(true);
    const endpoint = searchQuery 
      ? `http://localhost:5000/api/movies/search?query=${encodeURIComponent(searchQuery)}`
      : `http://localhost:5000/api/movies/popular?page=${currentPage}${selectedGenre ? `&genre=${selectedGenre}` : ''}`;
    
    axios.get(endpoint)
      .then(res => {
        if (searchQuery) {
          setMovies(res.data);
          setTotalPages(1);
        } else {
          setMovies(res.data.results);
          setTotalPages(res.data.total_pages);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching movies:", err);
        setLoading(false);
      });
  }, [currentPage, selectedGenre, searchQuery]);

  const fetchMovies = () => {
    setLoading(true);
    const endpoint = searchQuery 
      ? `http://localhost:5000/api/movies/search?query=${encodeURIComponent(searchQuery)}`
      : `http://localhost:5000/api/movies/popular?page=${currentPage}${selectedGenre ? `&genre=${selectedGenre}` : ''}`;
    
    axios.get(endpoint)
      .then(res => {
        if (searchQuery) {
          setMovies(res.data);
          setTotalPages(1);
        } else {
          setMovies(res.data.results);
          setTotalPages(res.data.total_pages);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching movies:", err);
        setLoading(false);
      });
  };

  // Fetch favorites
  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = () => {
    setFavoritesLoading(true);
    axios.get("http://localhost:5000/api/favorites")
      .then(res => {
        setFavorites(res.data);
        setFavoritesLoading(false);
      })
      .catch(err => {
        console.error("Error fetching favorites:", err);
        setFavoritesLoading(false);
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchMovies();
  };

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
    setCurrentPage(1);
  };

  const addFavorite = (movie) => {
    axios.post("http://localhost:5000/api/favorites", {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
    })
    .then(() => {
      alert("✅ Added to favorites!");
      fetchFavorites();
    })
    .catch(err => {
      if (err.response?.status === 409) {
        alert("⚠️ This movie is already in your favorites!");
      } else {
        alert("❌ Failed to add to favorites");
      }
    });
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">🎬 Movie Browser</h1>
        
        {/* Search and Filter Section */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search movies (e.g., batman, avengers)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
            >
              Search
            </button>
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setCurrentPage(1);
                  setTimeout(fetchMovies, 0);
                }}
                className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
              >
                Clear
              </button>
            )}
          </form>
          
          {!searchQuery && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Genre:
              </label>
              <select
                value={selectedGenre}
                onChange={handleGenreChange}
                className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Genres</option>
                {genres.map(genre => (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Popular Movies Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            {searchQuery ? `Search Results for "${searchQuery}"` : "🔥 Popular Movies"}
          </h2>
          <PopularMovies 
            movies={movies} 
            onAddFavorite={addFavorite}
            loading={loading}
          />
          
          {/* Pagination */}
          {!searchQuery && totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentPage === 1
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                Previous
              </button>
              <span className="text-gray-700 font-medium">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentPage === totalPages
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* Favorites Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">❤️ My Favorites</h2>
          <MyFavorites 
            favorites={favorites}
            loading={favoritesLoading}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
