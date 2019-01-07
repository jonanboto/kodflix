import React, { Component } from 'react';
import moviecover from './rumble-image.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <br /><br /><br />
        <br /><br /><br />
        <div className="container">
          <div className="title">ReactJs</div>
          <div className="title">HTML5</div>
          <div className="title">CSS3</div>
        </div>
        <div className="container">
          <div className="title">Node.js</div>
          <div className="title">MongoDB</div>
          <div className="title">Heroku</div>
        </div>
        <img src={moviecover} alt='Rumble in the Jungle' />
        <br /><br /><br />
      </div>
    );
  }
}

export default App;
