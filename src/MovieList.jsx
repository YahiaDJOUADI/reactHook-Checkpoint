import MovieCard from "./MovieCard";
export default ({ movies }) => {
    return (
      <div className="grid grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  };
  