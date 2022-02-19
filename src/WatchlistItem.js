import React from 'react';
import { watchedMovie } from './services/fetch-utils';

export default function WatchlistItem({ movie, fetchMovieData }) {

  async function handleClick() {
    await watchedMovie(movie.id);
    await fetchMovieData();
  }

  return (
    <div className='movie-poster'
      onClick={handleClick}>
      <h2>{movie.watched ? 'Watched' : '👀' }</h2>
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
      <img src={movie.poster ? `https://image.tmdb.org/t/p/original/${movie.poster}` : 'https://www.placecage.com/gif/200/300'}/>
      <h4>Average Rating: {movie.rating}⭐</h4>
      <p>({movie.reviews} votes)</p>
    </div>
  );
}
