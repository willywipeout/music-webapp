import {useState, useEffect} from 'react'
import Player from './Player'
/*import './player.css'*/



function AppPlay() {
  const [Songs] = useState([
    {
        title:'blessed',
        artist: 'french kiwi',
        img_src: './images/kay-the-great.jpg',
        src:'./music/FKJ_-_Blessed(128k).mp3',
    },
    {
        title:'canggu',
        artist: 'french kiwi',
        img_src: './images/kay-the-great.jpg',
        src:'./music/FKJ_-_Canggu(128k).mp3',
    },
    {
        title:'joy',
        artist: 'french kiwi',
        img_src: './images/kay-the-great.jpg',
        src:'./music/FKJ_-_Joy(128k).mp3',
    },
  ])
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

    useEffect(() => {
        setNextSongIndex(() => {
            if (currentSongIndex + 1 > Songs.length -1) {
                return 0;
            } else {
                return currentSongIndex +1;
            }
        });
    }, [currentSongIndex]);

    return (
        <section className='mw5 mw7-ns center  product flex flex-wrap justify-between' player-app>
            
            <article class="mw5 center  br3 pa4-ns mv3 ba black grow">
                <Player 
                    currentSongIndex={currentSongIndex}
                    setCurrentSongIndex={setCurrentSongIndex}
                    nextSongIndex={nextSongIndex}
                    Songs={Songs}
                />
            </article>
        </section>    
    )
}

export default AppPlay