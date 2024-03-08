import React, { useState, useEffect } from "react"
import "./Navbar.css"
import logo from "../Assets/logo-nazar.png"
import placeholder_icon from "../Assets/placeholder_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"
import email_icon from '../Assets/email_icon.png'
import youtube_icon from '../Assets/youtube_icon.png'
import instagram_icon from '../Assets/instagram_icon.png'
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {

  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const path = location.pathname.split('/')[1];
    setActiveLink(path);
  }, [location]);

  const [ menu, setMenu ] = useState("home");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-menu">
        <li className={activeLink === "" ? "active" : ""}><Link to='/'>Home</Link></li>
        <li className={activeLink === "visualizar-usuario" ? "active" : ""}><Link to='/visualizar-usuario'>Visualizar Usuario</Link></li>
        <li className={activeLink === "crear-usuario" ? "active" : ""}><Link to='/crear-usuario'>Crear Usuario</Link></li>
        <li className={activeLink === "ver-datos-usuario" ? "active" : ""}><Link to='/ver-datos-usuario'>Ver Datos Usuario</Link></li>
      </ul>
      <div className="navbar-social-icon">
        <div className="navbar-socials-container">
          <img src={placeholder_icon} alt="" />
        </div>
        <div className="navbar-socials-container">
          <img src={whatsapp_icon} alt="" />
        </div>
        <div className="navbar-socials-container">
          <img src={email_icon} alt="" />
        </div>
        <div className="navbar-socials-container">
          <img src={youtube_icon} alt="" />
        </div>
        <div className="navbar-socials-container">
          <img src={instagram_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar
