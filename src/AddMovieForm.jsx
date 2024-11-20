import React, { useState } from "react";

export default  ({ movies, setMovies }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!newMovie.title || !newMovie.description || !newMovie.posterURL || !newMovie.rating) {
      alert("Please fill out all fields.");
      return;
    }

    // Add the new movie
    setMovies([
      ...movies,
      { ...newMovie, rating: parseFloat(newMovie.rating) },
    ]);

    // Reset form
    setNewMovie({ title: "", description: "", posterURL: "", rating: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">🎥 Add a New Movie</h2>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          placeholder="Movie Title"
          value={newMovie.title}
          onChange={handleInputChange}
          className="text-black border p-2 rounded-md focus:ring-2 focus:ring-red-400"
        />
        <textarea
          name="description"
          placeholder="Movie Description"
          value={newMovie.description}
          onChange={handleInputChange}
          className="text-black border p-2 rounded-md focus:ring-2 focus:ring-red-400"
          rows="3"
        />
        <input
          type="url"
          name="posterURL"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={handleInputChange}
          className="text-black border p-2 rounded-md focus:ring-2 focus:ring-red-400"
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating (0-5)"
          value={newMovie.rating}
          onChange={handleInputChange}
          className="text-black border p-2 rounded-md focus:ring-2 focus:ring-red-400"
          min="0"
          max="5"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-red-600 text-white font-bold rounded-lg shadow-md hover:bg-red-700 transition"
        >
          Add Movie
        </button>
      </div>
    </form>
  );
};


