import React from 'react';

export default function WatchlistItem({ movie }) {
  return (
    <div className='movie-poster'>
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
      <img src={movie.poster ? `https://image.tmdb.org/t/p/original/${movie.poster}` : 'https://www.placecage.com/gif/200/300'}/>
      <h4>Average Rating: {movie.rating}⭐</h4>
      <span>({movie.reviews} votes)</span>
    </div>
  );
}
