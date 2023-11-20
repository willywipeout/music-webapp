import React from "react";
import './profile.css'
import tachyons from 'tachyons'

const ProfileCard = () =>{
   return(
      <>
         <section class="mw5 mw7-ns center pt5 ph5-ns profile-container">
      		<img src="./images/kay-the-great.jpg" alt=""/>
      		
      		<div className="social mw5 mw7-ns center flex ">
      		   <div className="stream"><span>Stream Now</span></div>
      		   <div className="boder dark-green">  </div>	
      			<i className="fa-brands fa-spotify pointer grow white" title="spotify"></i>
      		    <div className="boder2">  </div>	
      			<i className="fa-brands fa-soundcloud pointer grow white" title="soundcloud"></i>
      			<div className="boder3">  </div>
      			<i className="fa-brands fa-deezer pointer grow deezer white" title="deezer"></i>
      			<div className="boder4">  </div>
      			<i className="fa-brands fa-youtube pointer grow white" title="youtube"></i>
      			<div className="boder5">  </div>
      			<i className="fa-solid fa-b pointer grow white" title="boomplay"></i>
      			<div className="boder6">  </div>
      			<i className="fa-solid fa-music pointer grow white" title="apple music"></i>

      		</div>
      	</section>
      	<div className="title center pt3 tc ">
      		<span>Kay - The - Great</span>
      	</div>
      	<div className="mw5 mw7-ns center mt4 ph5-ns bt"></div>
      </>
   )
}

export default ProfileCard