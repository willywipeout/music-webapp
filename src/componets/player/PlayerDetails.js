import React from 'react'

function PlayerDetails(props) {
  return (
    <div className='c-player--details'>
       <div class="tc">
          <img src={props.song.img_src}  class="br-100 h4 w4 dib musicimg" title="Photo of a kitty staring at you"/>
          <hr class="mw3  bw1 b--black-10"/>
      </div>
      <div class="lh-copy measure center f6 black-70 ">
          <span className="br pr2">{props.song.title}</span>
          <span className="pl2">{props.song.artist}</span>
      </div>

    </div>
  )
}

export default PlayerDetails