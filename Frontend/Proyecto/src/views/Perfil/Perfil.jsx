import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormPerfil from "../../component/FormPerfil/FormPerfil.jsx";

export default function Perfil() {
  const [usuarios, setUsuarios] = useState(null);
  const [usuarioChange, setUsuarioChange] = useState(false);
  const params = useParams();
  useEffect(function () {
    async function fetchUsuarios() {
      const response = await fetch(`http://localhost:3000/user/${params.id}`);
      const detalles = await response.json();
      console.log(detalles);
      setUsuarios(detalles);
    }
    fetchUsuarios();
  }, []);

  return (
    <div className="formularioPerfil">
      {usuarios ? (
        <FormPerfil
          nombre={usuarios.nombre}
          apellidos={usuarios.apellidos}
          telefono={usuarios.telefono}
          email={usuarios.email}
          password={"*****"}
          setUsuarios={setUsuarios}
        />
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
