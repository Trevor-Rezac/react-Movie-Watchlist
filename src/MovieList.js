import React from 'react';
import { useLocation } from 'react-router-dom';
import Movie from './Movie';
import WatchlistItem from './WatchlistItem';

export default function MovieList({ movies, fetchMovieData, isOnWatchlist }) {
  const location = useLocation();

  return (
    <div className='movie-list'>
      {movies.map((movie, i) => location.pathname.includes('popular') 
        ? <Movie key={`${movie}-${i}`} movie={movie} 
          isOnWatchlist={isOnWatchlist}  
          fetchMovieData={fetchMovieData}/> 
        : <WatchlistItem key={`${movie}-${i}`} 
          movie={movie} 
          fetchMovieData={fetchMovieData}/>)}
    </div>
  
  );
}
