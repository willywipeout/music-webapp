import React from "react"
import tachyons from "tachyons"
import StoreData from "./StoreData"


import "./store.css"

const Store = () => {
	return(
      <> 

         <section className="mw5 mw7-ns center  product flex justify-between store">

         

         {

          StoreData.map((value, index) =>{
            return(

              	  <article className="br2 ba mv4 w-100 w-50-m w-25-l mw5 cp grow pointer">
                     <img src={(value.product)} className="db w-100 br2 br--top " alt="Photo of a kitten looking menacing."/>
                        <div className="pa2 ph3-ns pb3-ns">
                            <div className="flex w-100 mt1">
                                <div className="dtc">
                                  <h1 className="f5 f4-ns mv0">THE</h1>
                                </div>
                                <div className="dtc tr">
                                  <h2 className="f5 mv0"></h2>
                                </div>
                            </div>
                        </div>
                     </article>
              )
           })
          }
           </section> 
           <div className="mw5 mw7-ns center mt4 ph5-ns bt"></div> 
      </>
	)
}

export default Store;