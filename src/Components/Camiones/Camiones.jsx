import React from 'react'
import './Camiones.css'
import camion_1 from '../Assets/cam1.png'
import camion_2 from '../Assets/cam2.png'
import camion_3 from '../Assets/cam3.png'
import camion_4 from '../Assets/cam4.png'


const Camiones = () => {
  return (
    <div className="home-titulo">
      <h1>Sociedad de Transporte Nazar Limitada </h1>
        <h2>Atendemos las principales cadenas de retail y de alimentos del país</h2>
      <div className="home-images">
          <img src={ camion_1 } alt="" />
          <img src={ camion_2 } alt="" />
          <img src={ camion_3 } alt="" />
          <img src={ camion_4 } alt="" />
        </div>
      </div>
  )
}

export default Camiones
