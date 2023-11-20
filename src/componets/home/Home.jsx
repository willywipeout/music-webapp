import React from "react"
import ProfileCard from "./profile/ProfileCard"
import Music from "./music/Music"
import Album from './album/Album'
import Event from "./event/Event"
import Store from "./store/Store"
import "./home.css"


const Home = () => {
	return(
       <section className="home-container">
       	 <div>
       	 	<ProfileCard/>
            <Music/>
			<Album/>
			<Event />
			<Store />
       	  </div>
        </section>
	)
}

export default Home;