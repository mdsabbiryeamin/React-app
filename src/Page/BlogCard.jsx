import React from "react"
import { NavLink } from "react-router-dom"

const BlogCard=(pops)=>{
    return(
        <>
           <div className="containerblogCard">
           <div className="row">
            <div className="col-12">
             <div className="card blogCard  mb-3">
              <img src={pops.img} className="card-img-top Cardimg img-fluid" alt="..."/>
               <div className="card-body">
                <h5 className="card-title">{pops.title}</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink to="#" className="btn btn-outline-dark blogbtn">Go somewhere</NavLink>
              </div>
            </div> 
           </div>
          </div>
          </div>
           

        </>
    )
}
export default BlogCard