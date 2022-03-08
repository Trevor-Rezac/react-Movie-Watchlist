import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';
import { getWatchlistItems } from './services/fetch-utils';

export default function Watchlist() {
  const [movies, setMovies] = useState([]);

  async function fetchMovieData() {
    const movieWatchlist = await getWatchlistItems();

    setMovies(movieWatchlist);
  }

  useEffect(() => {
    fetchMovieData();
  }, []);

  return (
    <div className="watchlist">
      {/* <h3>Watchlist</h3> */}
      <p>(click each item to mark it watched/unwatched)</p>
      {movies.length ? (
        <MovieList movies={movies} fetchMovieData={fetchMovieData} />
      ) : (
        <h3>You Haven&apos;t Added Any Movies Yet!!!</h3>
      )}
    </div>
  );
}
