import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import { searchMovies, getWatchlistItems } from './services/fetch-utils';
import LoadingSpinner from './LoadingSpinner';


export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSearch(e) {
    e.preventDefault();
    setIsLoading(true);
    const movies = await searchMovies(searchQuery);
    setResults(movies);
    setIsLoading(false);
  }
  // console.log('||', results);

  async function fetchMovieData() {
    const movieWatchlist = await getWatchlistItems();

    setWatchlist(movieWatchlist);
  }

  useEffect(() => {
    fetchMovieData();
  }, []);

  function isOnWatchlist(api_id) {
    const match = watchlist.find(watchlistItem => Number(watchlistItem.api_id) === Number(api_id));

    return Boolean(match);
  }

  return (
    <div className='search-page'>
      <h3>Add movies to your Watchlist!</h3>
      <p>(click each movie to add it to your list)</p>
      <div className='search-form'>
        <form onSubmit={handleSearch}>
          <input placeholder='Search by title...' value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className='search-btn'>Search</button>
        </form>
      </div>
      <div>
        Search Results:
        {isLoading ? <LoadingSpinner /> : <MovieList movies={results} isOnWatchlist={isOnWatchlist} fetchMovieData={fetchMovieData}/>}

      </div>
    </div>
  );
}
