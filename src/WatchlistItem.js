import React from 'react';
import { deleteMovie, unWatchedMovie, watchedMovie } from './services/fetch-utils';

export default function WatchlistItem({ movie, fetchMovieData }) {
  async function handleWatchClick() {
    await watchedMovie(movie.id);
    await fetchMovieData();
  }

  async function handleUnWatchClick() {
    await unWatchedMovie(movie.id);
    await fetchMovieData();
  }

  async function handleDelete() {
    await deleteMovie(movie.id);
    await fetchMovieData();
  }

  return (
    <div className="movie-poster" onClick={movie.watched ? handleUnWatchClick : handleWatchClick}>
      <h4 style={{ color: 'green' }}>{movie.watched ? 'Watched' : '👀'}</h4>
      <h2 className="movie-title">{movie.title}</h2>
      <p>{movie.overview}</p>
      <img
        src={
          movie.poster
            ? `https://image.tmdb.org/t/p/original/${movie.poster}`
            : 'https://www.placecage.com/gif/200/300'
        }
      />
      <h4>Average Rating: {movie.rating}⭐</h4>
      <p>({movie.reviews} votes)</p>
      <button onClick={handleDelete} className="remove-btn">
        Remove
      </button>
    </div>
  );
}
