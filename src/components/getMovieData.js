import ali from './imagesfolder/ali.jpg';
import elephant from './imagesfolder/elephant.jpg';
import joplin from './imagesfolder/joplin.jpg';
import lincoln from './imagesfolder/lincoln.jpg'
import retrotv from './imagesfolder/retrotv.jpg'
import stpancras from './imagesfolder/stpancras.jpg'

export default function getMovieData()  {
    return [
      { id: 'rumbleinthejungle', name: 'Rumble in the Jungle', logo: ali, summary: `This is a placeholder for a summary of the movie`},
      { id: 'gracedwithlife', name: 'Graced with Life', logo: elephant, summary: `This is a placeholder for a summary of the movie`},
      { id: 'summeroflove', name: 'Summer of Love', logo: joplin, summary: `This is a placeholder for a summary of the movie`},
      { id: 'anationscarred', name: 'A Nation Scarred', logo: lincoln, summary: `This is a placeholder for a summary of the movie`},
      { id: 'alifelessordinary', name: 'A Life less Ordinary', logo: retrotv, summary: `This is a placeholder for a summary of the movie`},
      { id: 'beautyfrombricks', name: 'Beauty from Bricks', logo: stpancras, summary: `This is a placeholder for a summary of the movie`},
    ];
  }