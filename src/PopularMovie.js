import React from 'react';

export default function PopularMovie({ movie }) {
  
  return (
    <div className='movie-poster'
      // onClick={handleClick}
    >
      <h4 style={{ color: 'green' }} > 
        {/* {isOnWatchlist(movie.id) && 'Added to Watchlist'}  */}
      </h4>
      <h2 className='movie-title'>{movie.title}</h2>
      <p>{movie.overview}</p>
      <img src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : 'https://www.placecage.com/gif/200/300'}/>
      <h4>Average Rating: {movie.vote_average}⭐</h4>
      <span>({movie.vote_count} votes)</span>
    </div>
  );
}
