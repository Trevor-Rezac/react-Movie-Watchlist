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

  console.log('||', results);

  return (
    <>
      <h3>SearchPage</h3>
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
        <MovieList />
      </div>
    </>
  );
}
