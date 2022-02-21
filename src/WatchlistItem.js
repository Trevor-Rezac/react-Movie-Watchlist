import React from 'react';
import { deleteMovie, watchedMovie } from './services/fetch-utils';

export default function WatchlistItem({ movie, fetchMovieData }) {

  async function handleClick() {
    await watchedMovie(movie.id);
    await fetchMovieData();
  }

  async function handleDelete() {
    await deleteMovie(movie.id);
    await fetchMovieData();
  }

  return (
    <div className='movie-poster'
      onClick={handleClick}>
      <h3 style={{ color: 'green' }}>{movie.watched ? 'Watched' : '👀' }</h3>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <img src={movie.poster ? `https://image.tmdb.org/t/p/original/${movie.poster}` : 'https://www.placecage.com/gif/200/300'}/>
      <h4>Average Rating: {movie.rating}⭐</h4>
      <p>({movie.reviews} votes)</p>
      <button onClick={handleDelete}
        className='remove-btn'>Remove</button>
    </div>
  );
}
