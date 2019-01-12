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
          <TvShow name='Rumble in the Jungle' logo={ali} />
          <TvShow name='Graced with Life' logo={elephant} />
          <TvShow name='Summer of Love' logo={joplin} />
        </div>
          <br /><br />
        <div className='container'>
          <TvShow name='A Nation Scarred' logo={lincoln} />
          <TvShow name='A Life less Ordinary' logo={retrotv} />
          <TvShow name='Beauty from Bricks' logo={stpancras} />
        </div>
      </div>
    );
  }
  