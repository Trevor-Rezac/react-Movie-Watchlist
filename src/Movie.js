import React from 'react';

export default function Movie({ movie }) {
  return (
    <div className='movie-poster'>
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
      <img src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : 'https://www.placecage.com/gif/200/300'}/>
      <h4>Average Rating: {movie.vote_average}⭐</h4>
      <span>({movie.vote_count} votes)</span>
    </div>
  );
}
