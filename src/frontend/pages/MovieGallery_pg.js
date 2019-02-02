import React from 'react';
import MovieItems from '../data/MovieItems';
import MovieData from '../data/MovieData';

export default function MovieGallery() {
    return (
      <div>
        
        <div className='header'>
          <h1>Time to <span className='linethrough'>Net</span>flix.</h1>
        </div>
        
        <div className='container'>
          {
          MovieData().map(movie => (
            <MovieItems
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
  
  