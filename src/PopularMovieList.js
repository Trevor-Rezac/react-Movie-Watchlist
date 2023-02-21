import React, { useEffect, useState } from 'react';
import PopularMovie from './PopularMovie';
import { getPopularMovies } from './services/fetch-utils';

export default function PopularMovieList() {
  const [popularMovies, setPopularMovies] = useState([]);

  async function fetchPopularMovies() {
    const { body } = await getPopularMovies();
    const parsedData = JSON.parse(body).valueOf().data.results;
    setPopularMovies(parsedData);
  }

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  // console.log('||', popularMovies);
  return (
    <div className="popular-movies">
      {/* <h3>Weekly Top Movies</h3> */}
      <div className="movie-list">
        {popularMovies.map((movie, i) => (
          <PopularMovie key={`${movie}-${i}`} movie={movie} />
        ))}
      </div>
    </div>
  );
}
