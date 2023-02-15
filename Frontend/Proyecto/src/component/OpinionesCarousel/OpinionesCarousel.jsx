import { Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "./OpinionesCarousel.css";

const opiniones = [
  {
    id: 1,
    nombre: "Juan Perez",
    comentario: "Excelente servicio al cliente.",
  },
  {
    id: 2,
    nombre: "Maria Garcia",
    comentario: "Productos de alta calidad.",
  },
  {
    id: 3,
    nombre: "Pedro Martinez",
    comentario: "Envío rápido y eficiente.",
  },
  {
    id: 4,
    nombre: "Ana Rodriguez",
    comentario: "Buenos precios y promociones.",
  },
];

function OpinionesCarousel() {
  const [index, setIndex] = useState(0); // Estado para el índice de la opinión actual

  const handlePrev = () => {
    setIndex(index === 0 ? opiniones.length - 1 : index - 1); // Actualiza el índice para mostrar la opinión anterior
  };

  const handleNext = () => {
    setIndex(index === opiniones.length - 1 ? 0 : index + 1); // Actualiza el índice para mostrar la siguiente opinión
  };

  return (
    <div className="opiniones-carousel">
      {/* <ArrowBackIos className="prev" onClick={handlePrev} /> */}
      {/* <ArrowForwardIos className="next" onClick={handleNext} /> */}
      <Card>
        <CardContent>
          <Typography variant="h6" component="h2">
            {opiniones[index].nombre}
          </Typography>
          <Typography color="textSecondary">
            {opiniones[index].comentario}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default OpinionesCarousel;
