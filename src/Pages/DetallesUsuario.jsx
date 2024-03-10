import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./CSS/DetallesUsuario.css";


const DetallesUsuario = () => {

  const routes = [
    { path: '/ver-datos-usuario', label: 'Listado de Usuarios' },
    { path: '/usuarios/:id', label: 'Detalles del Usuario' }
  ];

  const { id } = useParams(); // Obtiene el ID del usuario de la URL
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // Realiza la solicitud a la API de GitHub para obtener la lista de usuarios
    fetch("https://mjarancibiasuazo.github.io/lista-usuarios/usuarios.json")
      .then((response) => response.json())
      .then((data) => {
        // Busca el usuario correspondiente al ID en la lista de usuarios
        const usuarioEncontrado = data.data.find(
          (usuario) => usuario.usuario_id === parseInt(id)
        );
        // Establece el usuario encontrado en el estado
        setUsuario(usuarioEncontrado);
      })
      .catch((error) =>
        console.error("Error al obtener los datos de la API:", error)
      );
  }, [id]);

  if (!usuario) {
    return <div>Cargando...</div>; 
  }

  return (
    <div>
      <div aria-label="breadcrumb">
          <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/ver-datos-usuario" className="breadcrumb-link">Listado de Usuarios</Link></li>
          </ol>
      </div>
    <div className="user-card">
      <img src={ usuario.imagen_perfil } alt=""></img>
      <div className="user-details">
        <h1>Información del Usuario</h1>
        <p>ID: {usuario.usuario_id}</p>
        <p>Nombre: {usuario.nombre}</p>
        <p>Apellidos: {usuario.apellidos}</p>
        <p>Email: {usuario.email}</p>
        <p>Nacionalidad: {usuario.nacionalidad}</p>
        <p>Ciudad: {usuario.ciudad}</p>
        <p>Cargo: {usuario.cargo}</p>
        <p>Fecha de Nacimiento: {usuario.fecha_nacimiento}</p>
        <p>Rut: {usuario.rut}</p>
        <p>Área: {usuario.area}</p>
      </div>
    </div>
    </div>
  );
};

export default DetallesUsuario;
