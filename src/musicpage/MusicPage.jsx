import React,{ useState, useEffect } from 'react'
import Player from './Player';



function MusicPage(props) {
   const [Songs] = useState ([
         {
             title:'canggu',
             artist: 'french kiwi',
             img_src: './images/kay-the-great.jpg',
             year: '2022',
             src:'./music/FKJ_-_Canggu(128k).mp3',
         },
         {
             title:'blessed',
             artist: 'french kiwi',
             cover: './images/kay-the-great.jpg',
             year: '2022',
             src:'./music/FKJ_-_Canggu(128k).mp3',
         },
         {
             title:'die with a smile',
             artist: 'french kiwi',
             cover: './images/music.jpg',
             year: '2022',
             src:'./music/FKJ_-_Die_with_a_Smile(128k).mp3',
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
   
   /* --------- Music -----------*/

          <> 

               <section className="mw5 mw7-ns center  product flex flex-wrap justify-between music">



                     

                     
                              <article class="mw5 center  br3 pa4-ns mv3 ba black grow">
                                 <div class="tc">
                                     <Player/>
                                    <hr class="mw3  bw1 b--black-10"/>
                                 </div>
                                 <div class="lh-copy measure center f6 black-70 ">
                                    <span className="br pr2">{}</span>
                                    <span className="pl2">{}</span>
                                 </div>
                                 <hr class="mw3  bw1 b--black-10"/>
                                
                              </article>
                    
               </section> 
               <div className="mw5 mw7-ns center mt4 ph5-ns bt pt5"></div>
               
            </>
  
  )
}

export default MusicPage

