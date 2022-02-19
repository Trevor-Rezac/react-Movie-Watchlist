import React from 'react';
import { useLocation } from 'react-router-dom';
import Movie from './Movie';
import WatchlistItem from './WatchlistItem';

export default function MovieList({ movies, fetchMovieData }) {
  const location = useLocation();

  return (
    <div className='movie-list'>
      {movies.map((movie, i) => location.pathname.includes('search') ? <Movie key={`${movie}-${i}`} movie={movie}/> : <WatchlistItem key={`${movie}-${i}`} movie={movie} fetchMovieData={fetchMovieData}/>)}
    </div>
  
  );
}
