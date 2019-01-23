
import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import MovieData from '../components/getMovieData';
import './MovieDetails.css'

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
          <h1>{this.state.movie.name}</h1>
          <div className='content'>
            <div className='text'>
              {this.state.movie.summary}
            </div>
            <img
              className='image'
              src={this.state.movie.logo}
              alt={this.state.movie.name}
            />
          </div>
          <Link to='/'><h3>Back to homepage</h3></Link>
        </div>
      );
    }
  }
}