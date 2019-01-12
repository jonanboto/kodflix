//importing react component
import React, { Component } from 'react';
//importing new components
import Gallery from './Gallery';
//importing the CSS file and instructions
import './App.css';

//primary code for the kodflix App
class App extends Component {
  render() {
    return (
      <div className='App'>
          <br /><br /><br /><br />
          <Gallery />
      </div>
    );
  }
}

//exporting the kodflix App code
export default App;
