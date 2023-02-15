import { useState } from "react";

const initialUserState = {
  nombre: "",
  apellidos: "",
  email: "",
  password: "",
  telefono: "",
};
export default function FormRegistro() {
  const [newUsuario, setNewUsuario] = useState(initialUserState);

  function handleInput(e) {
    const newRegistro = {
      ...newUsuario,
      [e.target.name]: e.target.value,
    };
    setNewUsuario(newRegistro);
  }

  function registrar(e) {
    e.preventDefault();

    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newUsuario),
    }).then((response) => {
      console.log(response.status);
      if (response.status == 400) {
        alert("error al recibir el body");
      } else if (response.status == 200) {
        alert("usuario registrado correctamente");
        setNewUsuario(initialUserState);
      } else if (response.status == 409) {
        alert("usuario ya registrado");
      }
    });
  }

  return (
    <div className="register">
      <section className="formulario">
        <form onSubmit={registrar}>
          <h1>Registrate</h1>
          <div className="nombre">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={newUsuario.nombre}
              onChange={handleInput}
            />
          </div>
          <div className="apellido">
            <input
              type="text"
              name="apellidos"
              value={newUsuario.apellidos}
              onChange={handleInput}
              placeholder="Apellidos"
            />
          </div>
          <div className="pass">
            <input
              type="tel"
              name="telefono"
              value={newUsuario.telefono}
              onChange={handleInput}
              placeholder="Telefono"
            />
          </div>
          <div className="email">
            <input
              type="email"
              name="email"
              value={newUsuario.email}
              onChange={handleInput}
              placeholder="Email"
            />
          </div>
          <div className="pass">
            <input
              type="password"
              name="password"
              value={newUsuario.password}
              onChange={handleInput}
              placeholder="Contraseña"
            />
          </div>

          <button type="onSubmit" className="button">
            Crear cuenta ahora
          </button>
        </form>
      </section>
    </div>
  );
}
