import React from 'react';
import Movie from './Movie';

export default function MovieList({ movies }) {
  
  return (
    <div>
      {movies.map((movie, i) => <Movie key={`${movie}-${i}`} movie={movie}/>)}
    </div>
  
  );
}
