import React, { useState, useEffect } from "react";
import data from "./data";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import "./slider.css";

function Slider() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Comentarios de aventureros<span> /</span>
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FormatQuoteIcon className="icon" style={{ fontSize: "62px" }} />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <KeyboardDoubleArrowLeftOutlinedIcon
            style={{ color: "gray", fontSize: "32px" }}
          />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <KeyboardDoubleArrowRightIcon
            style={{ color: "gray", fontSize: "32px" }}
          />
        </button>
      </div>
    </section>
  );
}

export default Slider;
