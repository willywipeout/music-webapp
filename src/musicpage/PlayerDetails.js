import React from 'react'

function PlayerDetails(props) {
  return (
    <div>
        <img src={props.song.img_src}  className="br-100 h4 w4 dib musicimg" title="Photo of a kitty staring at you"/>
    </div>
  )
}

export default PlayerDetails