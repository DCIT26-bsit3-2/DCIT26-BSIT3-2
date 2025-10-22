import React from "react";

export default function Favorites({ favorites }) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <span className="text-red-500">&#10084;&#65039;</span> My Favorites
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {favorites.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 py-8">
            No favorites yet.
          </div>
        ) : (
          favorites.map((fav, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow p-3 flex flex-col items-center group border border-gray-100"
            >
              <img
                src={`https://image.tmdb.org/t/p/w200${fav.poster_path}`}
                alt={fav.title}
                className=" w-full h-100 object-cover mb-2 group-hover:scale-105 transition-transform"
              />
              <p className="text-center font-semibold text-gray-800 mt-2 truncate w-full" title={fav.title}>
                {fav.title}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
