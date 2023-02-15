import { Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ShareIcon from "@mui/icons-material/Share";
import React, { useState, useEffect } from "react";
import "./play.css";
import WebcamCapture from "../Camara/Camara";

const EscapeRoom = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState(null);
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const questions = [
    {
      text: "What is the capital of France?",
      options: [
        { id: 1, value: "London" },
        { id: 2, value: "Paris" },
        { id: 3, value: "Madrid" },
      ],
      answer: 2,
    },
    {
      text: "What is the currency of Japan?",
      options: [
        { id: 1, value: "Euro" },
        { id: 2, value: "Yen" },
        { id: 3, value: "Dollar" },
      ],
      answer: 2,
    },
  ];

  useEffect(() => {
    if (currentQuestion === questions.length) {
      clearInterval(intervalId);
    } else if (!intervalId) {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(id);
    }
    return () => clearInterval(intervalId);
  }, [currentQuestion]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedOption) {
      setError("Please select an option");
      return;
    }
    if (questions[currentQuestion].answer === parseInt(selectedOption)) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedOption(null);
      setError(null);
    } else {
      setError("Incorrect answer, try again");
    }
  };

  if (currentQuestion === questions.length) {
    const handleFileInput = (e) => {
      setSelectedFile(e.target.files[0]);
    };

    const handleShare = () => {
      const shareUrl = "https://example.com";
      const shareTitle = "Check out this image!";
      navigator.share({ url: shareUrl, title: shareTitle });
    };
    return (
      <>
        <h2>Escape Room completado en: {time} seconds!</h2>
        <div>
          <h2>¡Sonrie! y comprarte tu aventura en nuestras redes sociales</h2>
          <div className="upload">
            <div>
              <input
                className="subir-imagen"
                type="file"
                onChange={handleFileInput}
                accept="image/*"
              />
            </div>
            <div>
              <Button
                variant="contained"
                startIcon={<CloudUploadIcon />}
                onClick={() => console.log(selectedFile)}
              >
                Upload
              </Button>
              <Button
                variant="contained"
                startIcon={<ShareIcon />}
                onClick={handleShare}
                disabled={!selectedFile}
              >
                Share
              </Button>
            </div>
          </div>
        </div>
        <div className="camara">
          <WebcamCapture />
        </div>
      </>
    );
  }

  return (
    <div className="escape-room-container">
      <h2>Time: {time} seconds</h2>
      <form onSubmit={handleSubmit}>
        <h2>{questions[currentQuestion].text}</h2>
        <div className="container-respuestas">
          {questions[currentQuestion].options.map((option) => (
            <div className="respuesta" key={option.id}>
              <input
                id={option.value}
                type="radio"
                name="option"
                value={option.id}
                onChange={handleOptionChange}
                checked={selectedOption === option.id.toString()}
              />
              <label htmlFor={option.value}>{option.value}</label>
            </div>
          ))}

          {error && <p>{error}</p>}
        </div>
        <button className="button" type="submit">
          Confirmar
        </button>
      </form>
    </div>
  );
};

export default EscapeRoom;
