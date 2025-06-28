
import React from 'react'
import "./banner.css"
import img01 from "/src/img/img01.png"


export const Home = () => {
  return (
    <>
    <div className='Banner'>
      <div className='Banner-conteiner'>
      <img src="./src/img/cooltext485401287776301.png" alt="" />
    <p>Los esperamos para brindarle la mejor atención</p>
    <p>Trabajamos para lograr un trabajo impecable</p>
    <a href="https://wa.me/541154773772">
      <img src="./src/img/Boton-Whatsapp.png" alt="" className='btn' />
    </a>
      </div>
       
    </div>

    <h1 className='heading'>Novedades</h1>
    <div className='contenedor-destacado'>
    <div className='coder-card'>
      <img src={img01} alt="" />
    </div>

     <div className='coder-card'>
      <img src="./src/img/Post para Instagram Barbería Moderno Minimalista Negro.png" alt="" />
    </div>


     <div className='coder-card'>
      <img src="./src/img/Post de instagram barberia profesional negro amarillo.png" alt="" />
    </div>

    </div>


    <div className='Publicidad'>
    <div className='Publicidad-conteiner'>

    
    </div>
    </div>

   
    </>
  )
}




 