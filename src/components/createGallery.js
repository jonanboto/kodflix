import React from 'react';
import MovieItem from './createMovieItems';
import getMovieData from './getMovieData';

export default function Gallery() {
    return (
      <div>
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
      </div>
    );
  }
  
  