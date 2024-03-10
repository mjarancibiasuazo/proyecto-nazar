import React, { useState, useEffect } from "react";
import "./CSS/VisualizarUsuario.css";

const VisualizarUsuario = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedField, setSortedField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleSort = (field) => {
    if (sortedField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortedField(field);
      setSortOrder("asc");
    }
  };

  const sortedUsers = users.slice().sort((a, b) => {
    if (sortedField) {
      if (sortOrder === "asc") {
        return a[sortedField] < b[sortedField] ? -1 : 1;
      } else {
        return a[sortedField] > b[sortedField] ? -1 : 1;
      }
    }
    return 0;
  });

  const filteredUsers = sortedUsers.filter(
    (user) =>
      Object.values(user).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      (user.address &&
        user.address.city &&
        user.address.city.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="visualizarusuario-background">
      <div className="visualizarusuario-content">
        <h1>Visualizar Usuarios</h1>
      </div>
      <div className="visualizarusuario-container">
        <div className="visualizarusuario-fields">
          <input
            type="text"
            placeholder="Buscar por nombre, email, ciudad..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <table className="table">
          <thead>
            <tr>
              <th onClick={() => handleSort("id")}>{sortedField === "id" && (<span>{sortOrder === "asc" ? " ↑" : " ↓"}</span>)}ID</th>
              <th onClick={() => handleSort("name")}>{sortedField === "id" && (<span>{sortOrder === "asc" ? " ↑" : " ↓"}</span>)}Nombre</th>
              <th onClick={() => handleSort("username")}>{sortedField === "id" && (<span>{sortOrder === "asc" ? " ↑" : " ↓"}</span>)}Nombre de Usuario</th>
              <th onClick={() => handleSort("email")}>{sortedField === "id" && (<span>{sortOrder === "asc" ? " ↑" : " ↓"}</span>)}Email</th>
              <th onClick={() => handleSort("address.city")}>{sortedField === "id" && (<span>{sortOrder === "asc" ? " ↑" : " ↓"}</span>)}Ciudad</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address && user.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VisualizarUsuario;
