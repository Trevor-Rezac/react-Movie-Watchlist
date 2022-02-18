import React, { useState } from 'react';
import MovieList from './MovieList';
import { searchMovies } from './services/fetch-utils';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  async function handleSearch(e) {
    e.preventDefault();
    const movies = await searchMovies(searchQuery);
    setResults(movies);
  }
  // console.log('||', results);

  return (
    <>
      <h3>Search for movies to add to you Watchlist</h3>
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
        <MovieList movies={results}/>
      </div>
    </>
  );
}
