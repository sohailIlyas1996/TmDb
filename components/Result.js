// Result.js
import React, { useState, useEffect } from 'react';
import MovieDetail from './MovieDetail';
// require('dotenv').config();
const Result = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=0d21a2ea7d019273d8fcb9cf56ee9e23`);
      const data = await response.json();
      setMovies(data.results || []);
    };

    fetchData();
  }, []);


  const handleMovieClick = (movieId) => {
    setSelectedMovieId(movieId);
  };

  const handleCloseMovieDetail = () => {
    setSelectedMovieId(null);
  };

  return (
    <div>
      <div className="flex flex-wrap -mx-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => handleMovieClick(movie.id)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.title || 'Movie Poster'}
              className="w-full h-64 object-cover rounded-md"
            />
            <p className="mt-2 text-center text-sm">{movie.title}</p>
          </div>
        ))}
      </div>

      {selectedMovieId && (
        <MovieDetail movieId={selectedMovieId} onClose={handleCloseMovieDetail} />
      )}
    </div>
  );
};

export default Result;
