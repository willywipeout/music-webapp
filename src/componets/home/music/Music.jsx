import React, {useState, useRef, useEffect} from 'react'
import MusicData from "./MusicData"
import "./music.css"

const Music = (props) => {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    useEffect(() => {
       if (isPlaying) {
         audioEl.current.play();
       } else {
         audioEl.current.pause();
       }
    });





    console.log(useRef)

    
	return(
      <> 

         <section className="mw5 mw7-ns center  product flex flex-wrap justify-between music">

         

                {

                MusicData.map((value, index) =>{
                    return(

                        <article class="mw5 center  br3 pa4-ns mv3 ba black grow">
                            <div class="tc">
                                <img src={(value.cover)}  class="br-100 h4 w4 dib musicimg" alt='kay'/>
                                <hr class="mw3  bw1 b--black-10"/>
                            </div>
                            <div class="lh-copy measure center f6 black-70 ">
                                <span className="br pr2">{value.albname}</span>
                                <span className="pl2">{value.year}</span>
                            </div>
                            <hr class="mw3  bw1 b--black-10"/>
                            <div className="flex justify-between pt3 tc"  
                                isPlaying={isPlaying} 
                                setIsPlaying={setIsPlaying}
                                >
                                <span className='fa-solid fa-play pointer' onClick={() => setIsPlaying(!isPlaying)} />
                                <i className="fa-solid fa-download pointer grow"></i>
                                <i className="fa-solid fa-heart pointer grow"></i>
                            </div>
                            <div>

                              <audio src={(value.track)} ref={audioEl}></audio>
                            </div>
                        
                        </article>
                    )
                })
                }
           </section> 
           <div className="mw5 mw7-ns center mt4 ph5-ns bt pt5"></div>

           
           
      </>
	)
}

export default Music;