import React from "react";
import tachyons from 'tachyons'
import ReactPlayer from "react-player";
import VideoData from "./VideoData";
import './video.css'

const Videos = () => {
   return(
      <>
         <section className='video center flex flex-wrap'>
            {
              VideoData.map((value, index) =>{
               return(
                  <div className="ma5 center tc">
                     <ReactPlayer controls url= {(value.source)} />
                     <span className="">{(value.title)}</span>
                  </div>
               ) 
              } )  
            }
         </section>
            
      </>
   )
}

export default Videos