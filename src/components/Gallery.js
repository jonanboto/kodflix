import React from 'react';

import TvShow from './Tvshow';
import ali from './images/ali.jpg';
import elephant from './images/elephant.jpg';
import joplin from './images/joplin.jpg';
import lincoln from './images/lincoln.jpg'
import retrotv from './images/retrotv.jpg'
import stpancras from './images/stpancras.jpg'


export default function Gallery() {
    return (
      <div>
        <div className='container'>
          <TvShow id='1' name='Rumble in the Jungle' logo={ali} />
          <TvShow id='2' name='Graced with Life' logo={elephant} />
          <TvShow id='3' name='Summer of Love' logo={joplin} />
        </div>
          <br /><br />
        <div className='container'>
          <TvShow id='4' name='A Nation Scarred' logo={lincoln} />
          <TvShow id='5' name='A Life less Ordinary' logo={retrotv} />
          <TvShow id='6' name='Beauty from Bricks' logo={stpancras} />
        </div>
      </div>
    );
  }
  