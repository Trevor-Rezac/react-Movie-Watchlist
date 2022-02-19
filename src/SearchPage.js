import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import { searchMovies, getWatchlistItems } from './services/fetch-utils';


export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  async function handleSearch(e) {
    e.preventDefault();
    const movies = await searchMovies(searchQuery);
    setResults(movies);
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
    <>
      <h3>Search for movies to add to your Watchlist</h3>
      <p>(click each movie to add it to your list)</p>
      <div className='search-form'>
        <form onSubmit={handleSearch}>
          <input value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button>Search</button>
        </form>
      </div>
      <div>
        Search Results: 
        <MovieList movies={results} isOnWatchlist={isOnWatchlist} fetchMovieData={fetchMovieData}/>
      </div>
    </>
  );
}
