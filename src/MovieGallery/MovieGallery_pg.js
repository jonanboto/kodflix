import React from 'react';
import MovieItem from './MovieItems';
import getMovieData from '../MovieData/MovieData';

export default function MovieGallery() {
    return (
      <div>
        
        <div className='header'>
          <h1>Time to <span className='linethrough'>Net</span>flix.</h1>
        </div>
        
        <div className='container'>
          {
          getMovieData().map(movie => (
            <MovieItem
              key={movie.id}
              id={movie.id}
              name={movie.name}
              logo={movie.logo} />
          ))
          }
        </div>

        <div className='footer'>
          <h1>And chill.</h1>
        </div>

      </div>
    );
  }
  
  