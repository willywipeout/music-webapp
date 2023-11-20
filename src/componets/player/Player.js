import React, {useState, useRef, useEffect} from 'react'
import PlayerControls from './PlayerControls'
import PlayerDetails from './PlayerDetails'
import tachyons from 'tachyons'


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
    <div className='c-player'>
      <audio src={props.Songs[props.currentSongIndex].src} ref={audioEl}></audio>
      <PlayerDetails song={props.Songs[props.currentSongIndex]}/>
      <PlayerControls
            isPlaying={isPlaying} 
            setIsPlaying={setIsPlaying}
            SkipSong={SkipSong} 
       />
      <p><strong>Next up :</strong>{props.Songs[props.nextSongIndex].title} by {props.Songs[props.nextSongIndex].artist}</p>
    </div>
  )
}

export default Player