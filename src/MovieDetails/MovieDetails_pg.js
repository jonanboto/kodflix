
import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import MovieData from '../MovieData/MovieData';
import './MovieDetails.css'

import '../App.css';

export default class MovieDetails extends React.Component {

  constructor() {
    super();
    this.state = {
      movie: {}
    };
  }

  componentDidMount() {
    let movieId = this.props.match.params.movieId;
    let movie = MovieData()
      .find(movie => movie.id === movieId);
    this.setState({ movie });
  }

  render() {
    if (this.state.movie === undefined) {
      return <Redirect to='not-found' />;
    } else {
      return (     
        <div className='MovieDetails'>
          
          <div className='header'>
            <h1>Nice choice.</h1>
          </div>
          
          <div className='content'>
            <div className='titleoverlay2'>
              <h2>{this.state.movie.name}</h2>
            </div>
            <div className='summary'>
              {this.state.movie.summary}
            </div>
            <img
              src={this.state.movie.logo}
              alt={this.state.movie.name}
            />
          </div>

          <Link to='/' div className='footer'>
              <h1>Back to homepage</h1>
          </Link>
          
        </div>
      );
    }
  }
}