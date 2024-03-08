import React from 'react'
import './Footer.css'
import logo from '../Assets/Logo-Nazar-Wht.svg'

const Footer = () => {
  return (

        <footer className="footer">
          <div className="column">
            <div className="footer-logo">
            <img src={ logo } alt="" />
            </div>
          </div>
          <div className="column">
            <h3>Contáctanos</h3>
            <ul>
              <li>Lo Sierra 02302, San Bernardo-Santiago</li>
              <li>WhatsApp</li>
              <li>comunicaciones@nazar.cl</li>
              <li>Nuestro Canal de Youtube</li>
              <li>Nuestro Instagram</li>
            </ul>
          </div>
          <div className="column">
            <h3>Menú</h3>
            <ul>
              <li>Home</li>
              <li>Quiénes Somos</li>
              <li>Nuestros Servicios</li>
            </ul>
          </div>
          <div className="column">
            <h3>Nuestros Servicios</h3>
            <ul>
              <li>Transporte Multitemperatura</li>
              <li>Transporte de Carga Seca</li>
              <li>Transporte para Mineria</li>
              <li>Transporte de Combustible</li>
            </ul>
          </div>
        </footer>
  )
}

export default Footer
