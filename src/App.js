import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Gallery from './components/Gallery';
import Details from './components/DetailsPage';
import './App.css';

//primary code for the kodflix App
class App extends Component {
  render() {
    return (
      <Router>
      <div className='App'>
          <Route exact path='/' component={Gallery}/>
          <Route exact path='/:details' component={Details}/>
      </div>
      </Router>
    );
  }
}

//exporting the kodflix App code
export default App;
