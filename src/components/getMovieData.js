import ali from './imagesfolder/ali.jpg';
import elephant from './imagesfolder/elephant.jpg';
import joplin from './imagesfolder/joplin.jpg';
import lincoln from './imagesfolder/lincoln.jpg'
import retrotv from './imagesfolder/retrotv.jpg'
import stpancras from './imagesfolder/stpancras.jpg'

export default function getMovieData()  {
    return [
      { id: 'rumbleinthejungle', name: 'Rumble in the Jungle', logo: ali },
      { id: 'gracedwithlife', name: 'Graced with Life', logo: elephant },
      { id: 'summeroflove', name: 'Summer of Love', logo: joplin },
      { id: 'anationscarred', name: 'A Nation Scarred', logo: lincoln },
      { id: 'alifelessordinary', name: 'A Life less Ordinary', logo: retrotv },
      { id: 'beautyfrombricks', name: 'Beauty from Bricks', logo: stpancras },
    ];
  }