import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default ({ movies }) => {
  const { title } = useParams();
  const navigate = useNavigate();


  const movie = movies.find((m) => m.title === decodeURIComponent(title));

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <div className="container mx-auto">
        <button
          className="mb-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-red-600 mb-4">{movie.title}</h1>
          <p className="mb-4">{movie.description}</p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={movie.trailer}
              title={movie.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-96 rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
