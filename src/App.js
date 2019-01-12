//importing react component
import React, { Component } from 'react';

//importing new components
import TvShow from './tvshow';

//importing images
import ali from './images/ali.jpg';
import elephant from './images/elephant.jpg';
import joplin from './images/joplin.jpg';
import lincoln from './images/lincoln.jpg'
import retrotv from './images/retrotv.jpg'
import stpancras from './images/stpancras.jpg'

//importing the CSS file and instructions
import './App.css';

//primary code for the kodflix App
class App extends Component {
  render() {
    return (
      <div className='App'>
          <br /><br /><br /><br />
        <div className='container'>
          <TvShow name='Rumble in the Jungle' logo={ali} />
          <TvShow name='Graced with Life' logo={elephant} />
          <TvShow name='Summer of Love' logo={joplin} />
        </div>
          <br /><br />
        <div className='container'>
          <TvShow name='A nation scarred' logo={lincoln} />
          <TvShow name='A life less ordinary' logo={retrotv} />
          <TvShow name='Beauty from bricks' logo={stpancras} />
        </div>
      </div>
    );
  }
}

//exporting the kodflix App code
export default App;
