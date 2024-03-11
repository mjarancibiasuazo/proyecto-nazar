import React from 'react';
import './Footer.css';
import logo from '../Assets/Logo-Nazar-Wht.svg';
import { mdiMapMarker, mdiWhatsapp, mdiEmailOutline, mdiYoutube, mdiInstagram } from '@mdi/js';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="column">
        <div className="footer-logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="column">
        <h3>Contáctanos</h3>
        <ul className="contact-list">
          <li>
            <svg viewBox="0 0 24 24" className="icon" style={{ width: '23px', height: '23px', fill: 'white' }}>
              <path className="mdiMapMarker" d={mdiMapMarker} />
            </svg>
            <span>Lo Sierra 02302, San Bernardo-Santiago</span>
          </li>
          <li>
            <svg viewBox="0 0 24 24" className="icon" style={{ width: '23px', height: '23px', fill: 'white' }}>
              <path d={mdiWhatsapp} />
            </svg>
            <span>WhatsApp</span>
          </li>
          <li>
            <svg viewBox="0 0 24 24" className="icon" style={{ width: '23px', height: '23px', fill: 'white' }}>
              <path d={mdiEmailOutline} />
            </svg>
            <span>comunicaciones@nazar.cl</span>
          </li>
          <li>
            <svg viewBox="0 0 24 24" className="icon" style={{ width: '23px', height: '23px', fill: 'white' }}>
              <path d={mdiYoutube} />
            </svg>
            <span>Nuestro Canal de Youtube</span>
          </li>
          <li>
            <svg viewBox="0 0 24 24" className="icon" style={{ width: '23px', height: '23px', fill: 'white' }}>
              <path d={mdiInstagram} />
            </svg>
            <span>Nuestro Instagram</span>
          </li>
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
  );
};

export default Footer;
