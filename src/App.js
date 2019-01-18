import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Gallery from './components/createGallery';
import DetailsPage from './components/createDetailsPage';
import './App.css';

//primary code for the kodflix App
class App extends Component {
  render() {
    return (
      <Router>
      <div className='App'>
          <Route exact path='/' component={Gallery}/>
          <Route exact path='/:details' component={DetailsPage}/>
      </div>
      </Router>
    );
  }
}

//exporting the kodflix App code
export default App;
