
import React from 'react'
import img1 from "/src/img/trabajo1.jfif"
import img2 from "/src/img/trabajo2.jfif"
import img3 from "/src/img/trabajo3.jfif"
import img4 from "/src/img/trabajo4.jfif"
import btn from "/src/img/btn.png"

import "./service.css"
export const Services = () => {
  return (
    <div>
        <h1>Nuestros Trabajos Realizados</h1>

         <div className='contenedor-destacado'>
    <div className='coder-card1'>
      <img src={img1} alt="" />
    </div>


     <div className='coder-card1'>
      <img src={img2} alt="" />
    </div>


     <div className='coder-card1'>
      <img src={img3} alt="" />
    </div>


<div className='coder-card1'>
      <img src={img4} alt="" />
    </div>


    </div>

    

    <a href="https://wa.me/541154773772">
      <img src={btn} alt="" className='btn' />
    </a>
    </div>

    
  )
}

