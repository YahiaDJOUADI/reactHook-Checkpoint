import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MovieDetails from "./MovieDetails";

// Function to convert YouTube URL to embed format ( i google it krimo)
const convertToEmbedURL = (url) => {

  const regExp1 = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|(?:.*[?&]v=))([\w-]{11})/;
 
  const regExp2 = /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([\w-]{11})/;

  const match1 = url.match(regExp1);
  const match2 = url.match(regExp2);

  if (match1) {
    return `https://www.youtube.com/embed/${match1[1]}`;
  } else if (match2) {
    return `https://www.youtube.com/embed/${match2[1]}`;
  } else {
    return url; 
  }
};

export default () => {
  const [movies, setMovies] = useState([
    {
      title: "The Dark Knight",
      description: "Gotham's savior faces chaos and madness.",
      posterURL:
        "https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
      rating: 4.8,
      trailer: "https://www.youtube.com/watch?v=g8evyE9TuYk", 
    },
    {
      title: "Avengers: Endgame",
      description: "The epic conclusion to the Infinity Saga.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg",
      rating: 4.7,
      trailer: "https://youtu.be/TcMBFSGVi1c?si=D3KLdPDQaG_nPolQ", 
    },
    {
      title: "6 Underground",
      description:
        "A vigilante team fakes their deaths to take down criminals.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNTNmZDgzMmMtMzJhMy00NGI3LWI5YTktYjg5MTllZmYyYTMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      rating: 3.5,
      trailer: "https://youtu.be/YLE85olJjp8?si=9jKervHBqLqXimHh", 
    },
  ]);

  // Convert trailer URLs to embed format
  const updatedMovies = movies.map((movie) => ({
    ...movie,
    trailer: convertToEmbedURL(movie.trailer),
  }));

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home movies={updatedMovies} setMovies={setMovies} />} />
        <Route path="/movie/:title" element={<MovieDetails movies={updatedMovies} />} />
      </Routes>
    </Router>
  );
};
