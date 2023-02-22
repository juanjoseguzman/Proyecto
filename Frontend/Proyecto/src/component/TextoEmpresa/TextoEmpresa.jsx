import "./textoEmpresa.css";

export default function TextoEmpresa() {
  return (
    <>
      <div className="imagen-texto">
        <div className="imagen-empresa">
          <img
            src="https://images.unsplash.com/photo-1670272506220-f8332b178148?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8dHJhYmFqbyUyMGVuJTIwZXF1aXBvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            style={{ borderRadius: "24px" }}
          />
        </div>
        <div className="texto-empresa">
          <h3>¿Buscas una forma diferente de generar equipo en tu empresa?</h3>
          <h5>
            ¿Quieres potenciar el trabajo en equipo en tu empresa? ¡Hazlo de una
            forma diferente y divertida! Crearemos una ruta que se adapte a
            vuestras necesidades para que podáis mejorar las 4C: Comunicación,
            Confianza, Creatividad y Cooperación.
          </h5>
        </div>
      </div>
    </>
  );
}
