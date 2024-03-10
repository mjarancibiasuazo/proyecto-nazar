import React, { useState, useEffect } from "react";
import "./CSS/VerDatosUsuario.css";
import { Link } from "react-router-dom";

const VerDatosUsuario = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(
      "https://mjarancibiasuazo.github.io/lista-usuarios/usuarios.json"
    )
      .then((response) => response.json())
      .then((data) => setUsers(data.data)); // Ajuste aquí para acceder a la propiedad "data"
  }, []);

  return (
    <div className="verdatosusuario-background">
      <div className="verdatosusuario-content">
        <h1>Ver Datos Usuarios</h1>
      </div>
      <div className="verdatosusuario-container">
        <table className="verdatosusuario-table">
          <caption className="verdatosusuario-caption"></caption>
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>NOMBRE</th>
              <th>CARGO</th>
              <th>AREA</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.usuario_id}>
                <td>
                  <Link to={`/usuarios/${user.usuario_id}`}>
                    <img src={user.imagen_perfil} alt="Imagen de Perfil" />
                  </Link>
                </td>
                <td>{user.usuario_id}</td>
                <td>{user.nombre}</td>
                <td>{user.cargo}</td> 
                <td>{user.area}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VerDatosUsuario;
