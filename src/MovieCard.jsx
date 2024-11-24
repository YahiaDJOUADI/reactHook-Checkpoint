import React from "react";
import { useNavigate } from "react-router-dom";

export default ({ movie }) => {
  const navigate = useNavigate();

  const handleMoreInfo = () => {
    navigate(`/movie/${encodeURIComponent(movie.title)}`);
  };

  return (
    <div className="bg-gray-900 text-gray-100 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl">
      <img
        src={movie.posterURL}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-5">
        <h2 className="text-2xl font-bold mb-3 text-red-600">{movie.title}</h2>
        <p className="text-gray-400 line-clamp-3">{movie.description}</p>
        <div className="flex justify-between items-center mt-6">
          <span className="bg-red-500 bg-opacity-20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold">
            ⭐ {movie.rating} / 5
          </span>
          <button
            className="px-4 py-2 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition"
            onClick={handleMoreInfo}
          >
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};
