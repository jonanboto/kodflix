import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MovieGallery from './frontend/pages/MovieGallery_pg';
import MovieDetails from './frontend/pages/MovieDetails_pg';
import NotFound from './frontend/pages/NotFound';

import './frontend/css/App.css';

//primary code to render the kodflix App
class App extends Component {
  render() {
    return (
      <Router>
      <div className='App'>
          <Switch>
            <Route exact path='/' component={MovieGallery}/>
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
