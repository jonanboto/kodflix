import React from 'react';

export default function TvShow(props) {
    return (
      <div className='item'>
        <img src={props.logo} alt={`logo for ${props.name}`} />
        <div className='titleoverlay'>
          <h3>{props.name}</h3>
        </div>
      </div>
    );
  }
  