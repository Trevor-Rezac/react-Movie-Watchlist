import React from 'react';

export default function Movie({ movie }) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
      <img src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : 'https://www.placecage.com/gif/200/300'}/>
    </div>
  );
}
