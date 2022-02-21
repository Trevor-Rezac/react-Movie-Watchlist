import React from 'react';
import { useState, useEffect } from 'react';
import { getWatchlistItems, addToWatchlist } from './services/fetch-utils';

export default function PopularMovie({ movie }) {
  
  const [watchlist, setWatchlist] = useState([]);
  
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

  const alreadyAdded = isOnWatchlist(movie.id);

  async function handleClick() {
    if (!alreadyAdded) {
      const watchlistItem = {
        title: movie.title,
        poster: movie.poster_path,
        overview: movie.overview,
        rating: movie.vote_average,
        reviews: movie.vote_count,
        api_id: movie.id,
        watched: false
      };

      await addToWatchlist(watchlistItem);
      await fetchMovieData();
      
    }
  }

  return (
    <div className='movie-poster'
      onClick={handleClick}
    >
      <h4 style={{ color: 'green' }} > 
        {isOnWatchlist(movie.id) && 'Added to Watchlist'} 
      </h4>
      <h2 className='movie-title'>{movie.title}</h2>
      <p>{movie.overview}</p>
      <img src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : 'https://www.placecage.com/gif/200/300'}/>
      <h4>Average Rating: {movie.vote_average}⭐</h4>
      <span>({movie.vote_count} votes)</span>
    </div>
  );
}
