
import React from 'react';
import { Link } from 'react-router-dom'

export default class MovieDetails extends React.Component {
  
  constructor() {
    super();
    this.state = {
        welcomeMessage: 'Welcome to the details page, WIP!'
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        welcomeMessage: 'hi there'
      });
    }, 3000);
  }

  render() {
    return (
      <div>
        <h1>{this.state.welcomeMessage}</h1>
        <Link to='/'><h3>Back to homepage</h3></Link>
      </div>
    );
  }
}
  