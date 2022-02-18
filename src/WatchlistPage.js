import React, { useEffect, useState } from 'react';
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
  
  // console.log('||', movies);

  return (
    <h3>Watchlist</h3>
  );
}
