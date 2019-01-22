import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Gallery from './components/createGallery';
import MovieDetails from './MovieDetails/MovieDetails';
import NotFound from './components/NotFound';

import './App.css';

//primary code to render the kodflix App
class App extends Component {
  render() {
    return (
      <Router>
      <div className='App'>
          <Switch>
            <Route exact path='/' component={Gallery}/>
            <Route exact path='/not-found' component={NotFound}/>
            <Route exact path='/:movieId' component={MovieDetails}/>
          </Switch>
      </div>
      </Router>
    );
  }
}

//exporting the kodflix App code
export default App;
