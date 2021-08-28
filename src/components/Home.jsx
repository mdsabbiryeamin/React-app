import React from "react"
import img from "../img/yeamin.jpg"
import SociIcon from "../Page/SoicIcon" 
import { NavLink } from "react-router-dom"

const Home=()=>{
    return(
        <> 
        
          <div className="contain ">
          <div className="container">
         <div className="row">
          <div className="col-10 mx-auto">
              <div className="row ">
                  <div className="col-md-6  mt-5 order-2 order-lg-1">
                      <h1><i> Hello</i></h1>
                      <h1>MY Name <strong className="hometital">Yeamin Sabbir</strong></h1>
                      <h1> I am a Web Designer.</h1>
                      <button className="btn btn-outline-dark mt-5"><NavLink className="nav-link" to="/About">About Me</NavLink></button>
                  <SociIcon />
                  </div>
                  <div className="col-lg-6 yeaminImg order-1 order-lg-2">
                      <img src={img} alt="MY img" className="img-fluid" />
          
                  </div>
              </div>


              </div>
              </div>
              </div>
          </div>
     
        
  

        </>
    )
}
export default Home