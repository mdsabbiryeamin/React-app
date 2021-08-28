import React from "react"
import img from "../img/yeamin.jpg"
import Skill from "../Page/Skills"
const About=()=>{
    return(
        <>

<div className="container about">
         <div className="row">
          <div className="col-10 mx-auto">
              <div className="row ">
                  <div className="col-md-6 mt-5 order-2 order-lg-1 AboutImg">
                      <img src={img} alt="MY img" className="img-fluid" />
                   </div>
                  <div className="col-lg-6  order-1 order-lg-2 mt-5 px-5 ">
                      <h1>About Me</h1>
                      <hr className="aboutHr"/>
                      <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt repellendus eaque soluta iure, tenetur esse iusto ipsa praesentium atque cum consequatur odit error aperiam sapiente accusamus, quae voluptatibus assumenda! Officiis praesentium repellendus esse rem debitis consequuntur, odit cumque culpa.</p>
                      <button className="mx-2 aboutbtn btn-dark">HIRE ME</button>
                      <button className="aboutbtn btn-outline-danger" >DOWNLOAD CV</button>


               </div>
             </div>
             <Skill/>
            </div>
          </div>
         </div>
       
        </>
    )
}
export default About