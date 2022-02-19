import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';
import { getWatchlistItems } from './services/fetch-utils';

export default function Watchlist() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovieData() {
      const movieWatchlist = await getWatchlistItems();

      setMovies(movieWatchlist);
    }

    fetchMovieData();

  }, []);
  
  console.log('||', movies);

  return (
    <div>
      <h3>Watchlist</h3>
      <MovieList movies={movies}/>
    </div>
  );
}
