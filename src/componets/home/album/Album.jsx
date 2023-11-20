import React from "react"
import tachyons from 'tachyons'
import AlbumData from "./AlbumData"

import "./album.css"

const Music = () => {
	return(
      <> 

         <section className="mw5 mw7-ns center  product flex flex-wrap justify-between music">

         

                {

                AlbumData.map((value, index) =>{
                    return(

                        <article class="mw5 center  br3 pa4-ns mv3 ba grow">
                            <div class="tc pic">
                                <img src={(value.cover)}  class="br-100 h4 w4 dib" title="Photo of a kitty staring at you"/>
                                <hr class="mw3  bw1 b--black-10"/>
                            </div>
                            <div class="lh-copy measure center f6 black-70 ">
                                <span className="br pr2">{value.albname}</span>
                                <span className="pl2">{value.year}</span>
                            </div>
                            <hr class="mw3  bw1 b--black-10"/>
                            <div className="flex justify-between pt3 tc">
                                <i className="fa-solid fa-play pl2 pointer grow"></i>
                                <i className="fa-solid fa-download pointer grow"></i>
                                <i className="fa-solid fa-heart pointer grow"></i>
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