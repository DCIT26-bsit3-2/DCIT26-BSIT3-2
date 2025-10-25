import React, { useEffect, useState } from "react";
import axios from "axios";

// Renders a single movie or favorite item.
const MovieCard = ({ movie, onAddFavorite }) => {
  // Check if the movie object has a MongoDB ID (_id), implying it's a saved favorite
  const isFavoriteCard = movie._id ? true : false; 
  
  const title = movie.title || 'Untitled Movie';

  return (
    <div 
        key={movie.id || movie._id} 
        className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:scale-[1.03] border border-gray-100"
    >
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={title}
        className="w-full h-auto object-cover rounded-t-xl"
        // Use placeholder if image is missing
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = `https://placehold.co/300x450/1e293b/ffffff?text=${title.split(' ').slice(0, 3).join('+')}`;
        }}
      />
      <div className="p-3 text-center">
        <h2 className="font-bold text-base text-gray-800 truncate mb-1" title={title}>
          {title}
        </h2>
        <p className="text-sm text-gray-500 mb-3">
          {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
        </p>

        {/* Show Add to Favorites button only for popular/search results */}
        {!isFavoriteCard && onAddFavorite && (
          <button
            onClick={() => onAddFavorite(movie)}
            className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition duration-150 shadow-md"
          >
            Add to Favorites
          </button>
        )}
      </div>
    </div>
  );
};


// --- Main Application Component (App) ---
function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Utility function to fetch popular movies
  const fetchPopularMovies = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("http://localhost:5000/api/movies/popular");
      setMovies(res.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching popular movies:", err);
      setError("Failed to fetch popular movies. Check if the backend server is running on port 5000.");
    } finally {
      setIsLoading(false);
    }
  };

  // Utility function to fetch favorites
  const fetchFavorites = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/favorites");
      setFavorites(res.data);
    } catch (err) {
      console.error("Error fetching favorites:", err);
    }
  };

  // Initial data load on component mount
  useEffect(() => {
    fetchPopularMovies();
    fetchFavorites();
  }, []); // Empty array ensures this runs only once

  // Handler for adding a movie to favorites
  const addFavorite = async (movie) => {
    try {
      // Send necessary fields including the unique TMDB ID
      await axios.post("http://localhost:5000/api/favorites", {
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        id: movie.id, // CRITICAL for backend uniqueness check
      });
      alert(` ✅ Added "${movie.title}" to favorites!`);
      fetchFavorites(); // Refresh the favorites list immediately
    } catch (err) {
      if (err.response && err.response.status === 409) {
          alert(` ⚠️ ${err.response.data.message}`); 
      } else {
          console.error("Error saving favorite:", err);
          alert(" ❌ Failed to save favorite.");
      }
    }
  };

  // --- Search Handler (Step 5: Search Logic) ---
  const handleSearch = async (e) => {
    e.preventDefault(); 
    if (searchTerm.trim() === '') {
      fetchPopularMovies(); // If search is empty, go back to popular list
      return;
    }

    try {
      setIsLoading(true);
      // Calls the new search route on the Express backend
      const res = await axios.get(`http://localhost:5000/api/movies/search?query=${searchTerm}`);
      setMovies(res.data);
      setError(null);
    } catch (err) {
      console.error("Search error:", err);
      setError("Failed to execute search. Check backend connection.");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10 font-sans">
        <header className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-blue-700 mb-2">🎬 Movie Tracker</h1>
            <p className="text-gray-600">Full-Stack Integration Lab</p>
        </header>

        {/* Search Bar (Step 5) */}
        <form onSubmit={handleSearch} className="mb-10 max-w-4xl mx-auto flex shadow-lg rounded-xl overflow-hidden">
            <input
                type="text"
                placeholder="Search for a movie (e.g., The Matrix) and press Enter..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow p-4 text-gray-700 focus:outline-none"
            />
            <button 
                type="submit"
                className="bg-blue-600 text-white p-4 font-semibold hover:bg-blue-700 transition duration-150"
            >
                Search
            </button>
        </form>

        {/* Popular Movies / Search Results Section (Refactored) */}
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
                {searchTerm ? `🔎 Search Results for "${searchTerm}"` : '🔥 Popular Movies'}
            </h2>
            
            {error && (
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">{error}</div>
            )}

            {isLoading ? (
                <div className="text-center p-10 text-xl text-gray-500">Loading movies...</div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                    {movies.map(movie => (
                        <MovieCard 
                            key={movie.id} 
                            movie={movie} 
                            onAddFavorite={addFavorite}
                        />
                    ))}
                    {movies.length === 0 && !error && (
                        <div className="col-span-full text-center p-10 text-xl text-gray-500">
                            No movies found. Try clearing the search or checking your API key.
                        </div>
                    )}
                </div>
            )}
        </section>

        {/* My Favorites Section (Refactored) */}
        <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">❤️ My Favorites ({favorites.length})</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {favorites.map((fav) => (
                    <MovieCard 
                        key={fav._id} 
                        movie={fav} // The presence of _id makes it a favorite
                    />
                ))}
                {favorites.length === 0 && (
                    <div className="col-span-full text-center p-4 text-gray-500 border border-dashed rounded-lg">
                        You have no saved favorites yet. Add some from the list above!
                    </div>
                )}
            </div>
        </section>
    </div>
  );
}

export default App;