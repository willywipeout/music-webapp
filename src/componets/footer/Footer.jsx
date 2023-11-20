import React from "react"
import tachyons from "tachyons"

const Footer = () => {
	return(
      <>
          <section className="mw5 mw7-ns center pt3 ph5-ns">
			<footer class="pv4 ph3 ph5-m ph6-l mid-gray">
			 <div className="flex">
			 	<i className="fa-brands fa-facebook"></i>
			 	<i className="fa-brands fa-twitter"></i>
			 	<i className="fa-solid"></i>
			 	<i className="fa-solid"></i>
			 </div>
			  <small class="f6 db tc">© 2016 <b class="ttu">SOME COMPANY Inc</b>., All Rights Reserved</small>
			  <div class="tc mt3">
			    <a href="/language/" title="Language" class="f6 dib ph2 link mid-gray dim">Language</a>
			    <a href="/terms/"    title="Terms" class="f6 dib ph2 link mid-gray dim">Terms of Use</a>
			    <a href="/privacy/"  title="Privacy" class="f6 dib ph2 link mid-gray dim">Privacy</a>
			  </div>
			</footer>
           </section>	
	   </>
	)
}

export default Footer