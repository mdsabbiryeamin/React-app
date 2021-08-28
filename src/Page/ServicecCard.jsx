import React from "react"

const ServicesCard=(props)=>{
    return(
        <>
        
<div className="card Servcard text-center mt-5">
  <div className="card-img mt-3">
    {props.img} 
    </div>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
  </div>
</div>

        </>
    )
}
export default ServicesCard 