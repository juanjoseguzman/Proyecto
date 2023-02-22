import "./textoDestino.css";

export default function TextoDestino() {
  return (
    <>
      <div className="imagen-texto">
        <div className="imagen-destino">
          <img
            src="https://images.unsplash.com/photo-1620134912794-e7c696c77dca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG9sZWRvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            style={{ borderRadius: "24px" }}
          />
        </div>
        <div className="texto-destino">
          <h3>Convierte tu ciudad en un Destino Turístico Inteligente</h3>
          <h5>
            Exity es la herramienta perfecta para gestionar el desvío de
            demanda, ayudarte a eliminar aglomeraciones y aumenta el engagement
            del turista con tu destino para convertir la visita en una
            experiencia inolvidable.
          </h5>
        </div>
      </div>
    </>
  );
}
