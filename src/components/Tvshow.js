import React from 'react';
import { Link } from 'react-router-dom'

export default function TvShow(props) {
    return (
      <Link to='/details' div className='item'>
        <img src={props.logo} alt={`logo for ${props.name}`} />
        <div className='titleoverlay'>
          <h3>{props.name}</h3>
        </div>
      </Link>
    );
  }
  