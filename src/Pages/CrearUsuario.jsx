import React, { useState } from "react";
import "./CSS/CrearUsuario.css";

const CrearUsuario = () => {
 
  const [usuario, setUsuario] = useState({
    name: "",
    username: "",
    email: "",
    city:"",
  });

  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validación de campos vacíos
    if (!usuario.name || !usuario.username || !usuario.email || !usuario.city) {
      setMensaje("Por favor, completa todos los campos.");
      setTipoMensaje("error");
      return;
    }
  
    // Validación de formato de correo electrónico
    if (!usuario.email.includes("@")) {
      setMensaje("El correo electrónico debe contener el carácter '@'.");
      setTipoMensaje("error");
      return;
    }
  
    // Validación de que los campos de texto solo contienen texto
    const regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(usuario.name) || !regex.test(usuario.username) || !regex.test(usuario.city)) {
      setMensaje("Los campos de texto solo deben contener letras y espacios.");
      setTipoMensaje("error");
      return;
    }
  
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });
      const data = await response.json();
      console.log("Usuario creado:", data);
      setMensaje(`Usuario creado: ${JSON.stringify(data)}`);
      setTipoMensaje("success");
      setUsuario({ name: "", username: "", email: "", city: "" });
      //Manejo de la respuesta de la API aquí, como mostrar un mensaje de éxito
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      setMensaje("Error al crear el usuario. Por favor, inténtalo de nuevo.");
      setTipoMensaje("error");
      // Mensaje de error
    }
  };
  
  const renderAlerta = () => {
    if (!mensaje) return null;

    return (
      <div className={`alerta ${tipoMensaje}`}>
        <p>{mensaje}</p><br  />
        <button onClick={() => setMensaje("")}>Cerrar</button>
      </div>
    );
  };

  return (
    <div className="crearusuario-background">
      <div className="crearusuario-content">
        <h1>Crear Usuario</h1>
      </div>
      <div className="crearusuario-container">
        <div className="crearusuario-fields">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={usuario.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="username"
            placeholder="Nombre de Usuario"
            value={usuario.username}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={usuario.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="Ciudad"
            value={usuario.city}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Guardar Usuario</button>
          {renderAlerta()}
        </div>
      </div>
    </div>
  );
};

export default CrearUsuario;
