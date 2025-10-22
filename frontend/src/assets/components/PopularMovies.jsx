import React from "react";

function PopularMovies({ movies, onAddFavorite, loading }) {
  if (loading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Loading movies...</p>
      </div>
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No movies found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {movies.map((movie) => (
        <div key={movie.id} className="bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col h-full">
          <div className="aspect-[2/3] mb-3 overflow-hidden rounded-md bg-gray-200">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-grow flex flex-col">
            <h2 className="font-semibold text-center text-sm mb-1 line-clamp-2 min-h-[2.5rem]">
              {movie.title}
            </h2>
            <p className="text-xs text-gray-500 text-center mb-3">
              {movie.release_date ? new Date(movie.release_date).getFullYear() : "N/A"}
            </p>
            <button
              onClick={() => onAddFavorite(movie)}
              className="mt-auto w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-md text-sm font-medium transition-colors shadow-sm"
            >
              ❤️ Add to Favorites
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PopularMovies;
