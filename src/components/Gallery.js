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
          <TvShow id='rumbleinthejungle' name='Rumble in the Jungle' logo={ali} />
          <TvShow id='gracedwithlife' name='Graced with Life' logo={elephant} />
          <TvShow id='summeroflove' name='Summer of Love' logo={joplin} />
          <TvShow id='anationscarred' name='A Nation Scarred' logo={lincoln} />
          <TvShow id='alifelessordinary' name='A Life less Ordinary' logo={retrotv} />
          <TvShow id='beautyfrombricks' name='Beauty from Bricks' logo={stpancras} />
        </div>
      </div>
    );
  }
  