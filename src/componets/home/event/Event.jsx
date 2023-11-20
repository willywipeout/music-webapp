import React, { Component } from "react";
import Slider from "react-slick";
import EventData from "./EventData";


import "./event.css"



const Event = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

	return(
      <> 
          <Slider {...settings}>
             {
              EventData.map((value, index) => {
                return(
                    <div className="mw7 center ph3 ph5-ns  event">
                        <div className="event-pic">
                        <img src="./images/banner2.jpg " alt="key"/>
                        </div> 
                        <article class=" tc br2 pv5 dark-green mb5 event-text" >
                          <h1 class="fw6 f3 f2-ns lh-title mt0 mb3">
                            {value.header}
                          </h1>
                          <h2 class="fw2 f4 lh-copy mt0 mb3">
                            {value.detail}
                          </h2>
                          <p class="fw1 f5 mt0 mb3">
                            {value.infor}
                          </p>
                          <div>
                            <a class="f6 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3"
                            href="#">
                              Tickets
                            </a>
                            <a class="f6 br-pill dark-green no-underline ba grow pv2 ph3 dib"
                            href="#">
                              Learn More
                            </a>
                            </div>
                        </article>
                    </div>
                 )  
               })
              }

              </Slider>   
            
             <div className="mw5 mw7-ns center mt4 ph5-ns bt "></div>
      </>
	)
}

export default Event