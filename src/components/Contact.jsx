import React from "react"
import  SociIcon from "../Page/SoicIcon"


const Contact=()=>{
    return(
        <>
     
        <div className="container">
         <div className="row">
          <div className="col-sm-5 mx-autos">
           <h1 className="text-center mb-5">Contact Me</h1>
            <div class="mb-4 contact">
             <input type="text" className="form-control " id="" placeholder="Name"/>
              </div>   
               <div class="mb-4 contact">
                  <input type="email" className="form-control " id="" placeholder="Email address"/>
                  </div>
                   <div class="mb-4 contact">
                   <input type="password" className="form-control " id="" placeholder="Password"/>
                    </div>
                     <div className="mb-4 contact">
                      <textarea className="form-control" id="textarea1" rows="3" placeholder="Your Message"></textarea>
           </div>
          <button className="btn btn-danger">submit</button>
        </div>
      </div>
    </div>

        </>
    )
}
export default Contact