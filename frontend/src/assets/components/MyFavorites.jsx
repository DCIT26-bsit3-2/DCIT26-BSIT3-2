import React from "react";

function MyFavorites({ favorites, loading }) {
  if (loading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Loading favorites...</p>
      </div>
    );
  }

  if (!favorites || favorites.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No favorites yet. Add some movies to your favorites!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-2">
      {favorites.map((fav) => (
        <div key={fav.movieId || fav._id} className="bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col h-full">
          <div className="aspect-[2/3] mb-3 overflow-hidden rounded-md bg-gray-200">
            <img
              src={`https://image.tmdb.org/t/p/w300${fav.poster_path}`}
              alt={fav.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-grow flex flex-col justify-center">
            <p className="text-center font-semibold text-sm mb-1 line-clamp-2 min-h-[2.5rem]">
              {fav.title}
            </p>
            <p className="text-xs text-gray-500 text-center">
              {fav.release_date ? new Date(fav.release_date).getFullYear() : "N/A"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyFavorites;
