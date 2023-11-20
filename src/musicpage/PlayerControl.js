import React from 'react'

function PlayerControl(props) {
  return (
    <div>
       <div className="flex justify-between pt3 tc center">
           
            <i className="fa-solid fa-play pl2 pointer " onClick={() => props.setIsPlaying(!props.isPlaying)}></i>
            <i className="fa-solid fa-download pointer "></i>
            <i className="fa-solid fa-heart pointer "></i>
       </div>
    </div>
  )
}

export default PlayerControl