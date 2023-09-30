// MovieDetail.js
import React, { useState, useEffect } from 'react';

const MovieDetail = ({ movieId, onClose }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=0d21a2ea7d019273d8fcb9cf56ee9e23`);
      const data = await response.json();
      setMovieDetails(data);
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative max-w-2xl w-full overflow-hidden rounded-md">
        <button className="absolute top-4 right-4 text-white" onClick={onClose}>
          Close
        </button>
        <div className="h-96 bg-cover bg-center" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movieDetails.backdrop_path})` }} />
        <div className="p-8 bg-white">
          <h2 className="text-2xl font-bold mb-4">{movieDetails.title}</h2>
          <p className="text-gray-600 mb-4">{movieDetails.release_date}</p>
          <p className="text-gray-800">{movieDetails.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
