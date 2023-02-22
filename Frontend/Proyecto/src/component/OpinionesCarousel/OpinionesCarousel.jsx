// import { Card, CardContent, Typography } from "@mui/material";
// import React, { useState } from "react";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import "./OpinionesCarousel.css";

// const opiniones = [
//   {
//     id: 1,
//     nombre: "Juan Perez",
//     comentario: "Excelente servicio al cliente.",
//   },
//   {
//     id: 2,
//     nombre: "Maria Garcia",
//     comentario: "Productos de alta calidad.",
//   },
//   {
//     id: 3,
//     nombre: "Pedro Martinez",
//     comentario: "Envío rápido y eficiente.",
//   },
//   {
//     id: 4,
//     nombre: "Ana Rodriguez",
//     comentario: "Buenos precios y promociones.",
//   },
// ];

// function OpinionesCarousel() {
//   const [index, setIndex] = useState(0);

//   const handlePrev = () => {
//     setIndex(index === 0 ? opiniones.length - 1 : index - 1);
//   };

//   const handleNext = () => {
//     setIndex(index === opiniones.length - 1 ? 0 : index + 1);
//   };

//   return (
//     <div className="opiniones-carousel">
//       <ArrowBackIosNewIcon className="prev" onClick={handlePrev} />
//       <ArrowForwardIosIcon className="next" onClick={handleNext} />
//       <Card>
//         <CardContent>
//           <Typography variant="h6" component="h2">
//             {opiniones[index].nombre}
//           </Typography>
//           <Typography color="textSecondary">
//             {opiniones[index].comentario}
//           </Typography>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default OpinionesCarousel;

// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";

// export function Slider() {
//   return (
//     <Splide options={{ rewind: true }} aria-label="React Splide Example">
//       <SplideSlide>
//         <img src="image1.jpg" alt="Image 1" />
//       </SplideSlide>
//       <SplideSlide>
//         <img src="image2.jpg" alt="Image 2" />
//       </SplideSlide>
//     </Splide>
//   );
// }

import React from "react";
import Splide from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function TestimonialsSlider() {
  const options = {
    type: "loop",
    perPage: 1,
    perMove: 1,
  };

  let testimonials = [
    {
      id: 1,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ante vel ante tincidunt lobortis.",
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "Pellentesque id ipsum ut nulla dignissim feugiat ut a sapien. Fusce at quam eu risus scelerisque volutpat ac nec dui.",
    },
    {
      id: 3,
      name: "Mark Johnson",
      text: "Nulla facilisi. Vestibulum tristique orci ac velit bibendum fringilla. Maecenas sed ligula eget elit vestibulum gravida.",
    },
  ];

  return (
    <Splide options={options}>
      {testimonials.map((testimonial) => (
        <SplideSlide key={testimonial.id}>
          <div>
            <h3>{testimonial.name}</h3>
            <p>{testimonial.text}</p>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
