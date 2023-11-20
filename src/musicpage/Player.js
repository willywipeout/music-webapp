import React, {useState, useRef, useEffect} from 'react'
import PlayerDetails from './PlayerDetails';

function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
 
    useEffect(() => {
       if (isPlaying) {
         audioEl.current.play();
       } else {
         audioEl.current.pause();
       }
    });
 
    const SkipSong = (forwards = true) => {
     if (forwards) {
        props.setCurrentSongIndex(() => {
         let temp = props.currentSongIndex;
         temp++;
 
         if (temp > props.Songs.lenth - 1) {
             temp = 0;
         }
         return temp;
         
        })
     } else {
         props.setCurrentSongIndex(() => {
             let temp = props.currentSongIndex;
             temp--;
     
             if (temp < 0) {
                 temp = props.Songs.lenth - 1;
             }
             return temp;
             
            })
     }
    }
  return (
    <div>
        
        <PlayerDetails song={props.Songs}/>

    </div>
  )
}

export default Player