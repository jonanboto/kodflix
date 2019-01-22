
import React from 'react';
import { Link } from 'react-router-dom'
import MovieData from './getMovieData';

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
    return (
      <div>
        <h1>{this.state.movie.name}</h1>
        <Link to='/'><h3>Back to homepage</h3></Link>
      </div>
    );
  }
}
  