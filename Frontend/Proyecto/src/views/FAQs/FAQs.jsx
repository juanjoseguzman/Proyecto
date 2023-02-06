import { Grid } from "@mui/material";
import React, { useState } from "react";

function ExpandableCard({ title, info }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ background: "lightgray", padding: "10px" }}>
      <h3>{title}</h3>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "-" : "+"}
      </button>
      {expanded && (
        <div>
          <p>{info}</p>
        </div>
      )}
    </div>
  );
}

function App() {
  const cards = [
    {
      title: "¿Qué requerimientos técnicos se necesitan?",
      info: "Únicamente necesitas un móvil o tablet con conexión a internet y con el GPS activado.",
    },
    {
      title: "¿Cómo empiezo a jugar?",
      info: "Simplemente selecciona la ruta que quieres hacer. Recuerda tener el GPS activado. Hasta que no te situés en el punto inicial de la ruta y le des a Iniciar Ruta, no comenzará el juego.",
    },
    {
      title: "¿Qué tipos de rutas te vas a encontrar?",
      info: "Hay dos tipos de ruta: Descubre a tu ritmo y A contrarreloj. La opción “Descubre a tu ritmo” te permite realizar la aventura sin prisas. No hay preocupación por el tiempo, simplemente disfruta del paseo resolviendo acertijos entretenidos. Siempre podrás retomarla donde la hayas dejado. La opción “A contrarreloj” está más enfocada la competición, existe un ranking y el objetivo es liderarlo. Los acertijos son relativos a lugares que vas visitando. Si tienes problemas, siempre puede utilizar nuestras pistas, pero recuerda, tienen penalización de tiempo.",
    },
  ];

  return (
    <Grid sx={{ width: "100%" }}>
      {cards.map((card, index) => (
        <ExpandableCard key={index} title={card.title} info={card.info} />
      ))}
    </Grid>
  );
}

export default App;
