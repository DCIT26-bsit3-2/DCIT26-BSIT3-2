import React from "react";

export default function PopularMovies({ movies, addFavorite }) {
  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <span className="text-blue-500"></span> 🎬 Popular Movies
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {movies.length === 0 ? (
          <div className="col-span-full text-center text-gray-400 py-8">
            No movies found.
          </div>
        ) : (
          movies.map(movie => (
            <div
              key={movie.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow p-3 flex flex-col items-center border border-gray-100 group"
            >
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className=" w-full h-100 object-cover mb-2 group-hover:scale-105 transition-transform"
              />
              <h2 className="font-semibold text-center text-gray-900 mt-2 truncate w-full" title={movie.title}>
                {movie.title}
              </h2>
              <button
                onClick={() => addFavorite(movie)}
                className="mt-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-1.5 px-4 rounded-lg shadow hover:from-blue-600 hover:to-blue-800 transition-colors text-sm font-medium"
              >
                + Add to Favorites
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
