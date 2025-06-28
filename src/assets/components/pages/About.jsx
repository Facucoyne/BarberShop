
import React from 'react'
import "./about.css"
import img1 from "/src/img/about.png"

export const About = () => {
  return (
    <div className='main-about'>
      <section className='section-about'>
        <div className='container-image'>
        <img src={img1} alt="" />

        </div>
      <div className='container-about-me'>
        <p className='Parrafo'>💈 Presentación Profesional  💈</p>
        <p className='Parrafo'>
<hr />
Hola, soy Benja Liempe, barbero con [años de experiencia o tiempo trabajando] en el mundo de la barbería. Desde chico siempre me atrajo el estilo, los detalles y la forma en que un buen corte puede cambiar la actitud de una persona. Empecé cortando el pelo a mis amigos, y con el tiempo, convertí esa pasión en mi profesión.
</p>
      </div>
      </section>
      <a href="https://wa.me/541154773772">
      <img src="./src/img/Boton-Whatsapp.png" alt="" className='btn' />
    </a>
    </div>
  )
}
