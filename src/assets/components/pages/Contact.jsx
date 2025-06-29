import React from 'react'
import "./contact.css"
import btn from "/src/img/btn.png"
import img2 from "/src/img/barberia.jpg"
export const Contact = () => {
  return (
    <div>
       <div className='main-about'>
      <section className='section-about'>
        <div className='container-image'>
        <img src={img2} alt="" />

        </div>
      <div className='container-about-me'>
        <p className='Parrafo'>💈 contáctanos  💈</p>
        <p className='Parrafo'>
<hr />
<p className='Parrafo'>Numero: 1154773772</p>
<p className='Parrafo'>Si tienes preguntas, comentarios o necesitas más información sobre nuestros servicios, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte y responder a todas tus consultas lo antes posible</p>
</p>
      </div>
      </section>

    </div>
    <a href="https://wa.me/541154773772">
      <img src={btn} alt="" className='btn' />
    </a>
    </div>
  )
}
