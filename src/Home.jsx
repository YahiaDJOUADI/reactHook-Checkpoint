import React from "react";
import Hero from "./Hero";
import Filter from "./Filter";
import MovieList from "./MovieList";
import AddMovieForm from "./AddMovieForm";

export default ({ movies, setMovies }) => {
  const [filters, setFilters] = React.useState({ title: "", rating: "" });

  const filteredMovies = movies.filter((movie) =>
    (filters.title
      ? movie.title.toLowerCase().includes(filters.title.toLowerCase())
      : true) &&
    (filters.rating ? movie.rating >= parseFloat(filters.rating) : true)
  );

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
