import React, { useState } from "react";
import Hero from "./Hero";
import Filter from "./Filter";
import MovieList from "./MovieList";
import AddMovieForm from "./AddMovieForm";

export default () => {
  const [movies, setMovies] = useState([
    {
      title: "The Dark Knight",
      description: "Gotham's savior faces chaos and madness.",
      posterURL:
        "https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
      rating: 4.8,
    },
    {
      title: "Avengers: Endgame",
      description: "The epic conclusion to the Infinity Saga.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg",
      rating: 4.7,
    },
    {
      title: "6 Underground",
      description:
        "A vigilante team fakes their deaths to take down criminals.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNTNmZDgzMmMtMzJhMy00NGI3LWI5YTktYjg5MTllZmYyYTMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      rating: 3.5,
    },
  ]);

  const [filters, setFilters] = useState({ title: "", rating: "" });

  const filteredMovies = movies.filter((movie) =>
    (filters.title ? movie.title.toLowerCase().includes(filters.title.toLowerCase()) : true) &&
    (filters.rating ? movie.rating >= parseFloat(filters.rating) : true)
  );
  ;

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-800 via-red-600 to-red-500 text-gray-100">
      <div className="container mx-auto p-6">
        <Hero />
        <AddMovieForm movies={movies} setMovies={setMovies} />
        <Filter filters={filters} setFilters={setFilters} />
        <MovieList movies={filteredMovies} />
      </div>
    </div>
  );
};
