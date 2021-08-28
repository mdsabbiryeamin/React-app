import React from "react"
import BlogCard from "../Page/BlogCard"
import webimg1 from "../img/webimg1.jpg"
import webimg2 from "../img/webimg2.jpg"
import webimg3 from "../img/webimg3.jpg"
import { NavLink } from "react-router-dom"




const BlogPost=()=>{
    return(
        <>
          <div className="container">
           <div className="row">
            <div className="col-12">
               <h1 className=" mb-3 text-center">My Project</h1>
                <div className="row">
                    <div className="col-sm-4">
                    <BlogCard img={webimg1} title="This my Website"/>
                    </div>
                    <div className="col-sm-4">
                    <BlogCard img={webimg2} title="This my Website"/>
                    </div>
                    <div className="col-sm-4">
                        
                    <BlogCard img={webimg3} title="This my Website"/>
                    <button className="btn btn-outline-dark mx-5 mt-3"><NavLink className="nav-link" to="/Services"> Go TO My Services</NavLink></button>         
                </div>
             </div>
           </div>
        </div>
        </div>
                   
                  


        </>
    )
}
export default BlogPost