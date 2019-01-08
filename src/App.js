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
        <br /><br /><br />
        <br /><br /><br />
        <div className="container">
          <div className="item">
            <img src={ali} alt='Muhammad Ali' />
          </div>
          <div className="item">
            <img src={elephant} alt='Elephant facing front on' />
          </div>
          <div className="item">
            <img src={joplin} alt='Janis Joplin playing guitar' />
          </div>
        </div>
        <br /> <br /> <br />
        <div className="container">
          <div className="item">
            <img src={lincoln} alt='Abraham Lincoln set back in colour' />
          </div>
          <div className="item">
            <img src={retrotv} alt='1960s style tv on stand' />
          </div>
          <div className="item">
            <img src={stpancras} alt='St Pancras railway station architecture' />
          </div>
        </div>
        <br /> <br /> <br />
        <br /> <br /> <br />
        <br /> <br /> <br />
      </div >
    );
  }
}

export default App;
