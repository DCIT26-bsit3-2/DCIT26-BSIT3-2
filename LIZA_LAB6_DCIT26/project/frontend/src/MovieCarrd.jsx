// src/components/MovieCard.jsx

import React from 'react';

const MovieCard = ({ movie, isFavorite, onAddFavorite }) => {
  return (
    <div key={movie.id || movie._id} className="bg-gray-100 p-3 rounded shadow-md">
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        className="rounded mb-2"
      />
      <h2 className="font-semibold text-center">{movie.title}</h2>
      
      {/* Only show the Add to Favorites button if it's not already a favorite */}
      {!isFavorite && (
        <button
          onClick={() => onAddFavorite(movie)}
          className="mt-2 bg-blue-500 text-white py-1 px-3 rounded text-sm"
        >
          Add to Favorites
        </button>
      )}
    </div>
  );
};

export default MovieCard;