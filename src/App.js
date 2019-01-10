import React, { Component } from 'react';
import ali from './images/ali.jpg';
import elephant from './images/elephant.jpg';
import joplin from './images/joplin.jpg';
import lincoln from './images/lincoln.jpg'
import retrotv from './images/retrotv.jpg'
import stpancras from './images/stpancras.jpg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <div className="item">
            <img src={ali} alt='Muhammad Ali' />
            <div className="titleoverlay">
              <h3>Rumble in the Jungle</h3>
            </div>
          </div>
          <div className="item">
            <img src={elephant} alt='Elephant facing front on' />
            <div className="titleoverlay">
              <h3>Graced with life</h3>
            </div>
          </div>
          <div className="item">
            <img src={joplin} alt='Janis Joplin playing guitar' />
            <div className="titleoverlay">
              <h3>Summer of love</h3>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          <div className="item">
            <img src={lincoln} alt='Abraham Lincoln set back in colour' />
            <div className="titleoverlay">
              <h3>A nation scarred</h3>
            </div>
          </div>
          <div className="item">
            <img src={retrotv} alt='1960s style tv on stand' />
            <div className="titleoverlay">
              <h3>A life less ordinary</h3>
            </div>
          </div>
          <div className="item">
            <img src={stpancras} alt='St Pancras railway station architecture' />
            <div className="titleoverlay">
              <h3>Beauty from bricks</h3>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div >
    );
  }
}

export default App;
