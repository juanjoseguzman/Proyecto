import { Button, Grid, Paper, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ShareIcon from "@mui/icons-material/Share";
import React, { useState, useEffect } from "react";
import "./play.css";
import WebcamCapture from "../Camara/Camara";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Pista from "../Pista/Pista";
import { Box } from "@mui/system";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { useAuthContext } from "../../Context/AuthContext";

const EscapeRoom = () => {
  const [currentQuestion, setCurrentQuestion] = useState();
  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState(null);
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preguntas, setPreguntas] = useState([]);
  const [respuestas, setRespuestas] = useState([]);
  const [completado, setCompletado] = useState(false);
  const [pista, setPista] = useState(null);

  const [open, setOpen] = useState(false);
  const { id } = useParams();

  const { dataToken } = useAuthContext();

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  useEffect(function () {
    async function fetchData() {
      const response = await fetch(`http://localhost:3000/preguntas/${id}`);
      const data = await response.json();

      setPreguntas(data);
      setCurrentQuestion(0);
      setRespuestas(data[0].respuestas);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (completado) {
      clearInterval(intervalId);
    }
  }, [completado]);

  useEffect(() => {
    if (!intervalId) {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(id);
    }
    return () => clearInterval(intervalId);
  }, [intervalId]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const respuestasIndex = preguntas[currentQuestion].respuestas.findIndex(
      (element) => element.idrespuestas == selectedOption
    );

    if (preguntas[currentQuestion].respuestas[respuestasIndex].correcto === 1) {
      if (currentQuestion === preguntas.length - 1) {
        setCompletado(true);

        //fetch ranking
        fetch("http://localhost:3000/ranking/add", {
          method: "POST",
          headers: { "content-Type": "application/json" },
          body: JSON.stringify({
            idusuario: dataToken.id,
            idrutas: id,
            reloj: formatTime(time),
          }),
        }).then((response) => {
          console.log(response.status);
          if (response.status == 400) {
            alert("error al recibir el body");
          } else if (response.status == 200) {
            Swal.fire("Ruta Terminada", "Usuario añadido a Ranking");
            setNewUsuario(initialUserState);
          } else if (response.status == 409) {
            Swal.fire({
              icon: "error",
              title: "Error...",
              text: "Usuario ya resgistrado",
            });
          }
        });
      } else {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        setRespuestas(preguntas[currentQuestion + 1].respuestas);
        setSelectedOption(null);
        setError(null);
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "La respuesta No es correcta",
        allowOutsideClick: false,
      });
    }
  };

  async function handleClickOpen(idpregunta) {
    console.log(idpregunta);

    const response = await fetch(`http://localhost:3000/pistas/${idpregunta}`);
    const data = await response.json();
    setPista(data);

    Swal.fire("Ayuda!", `${data.texto}`, "question");
    setTime((prevTime) => prevTime + 300);
  }

  if (completado) {
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
        <h2>Escape Room completado en: {formatTime(time)}</h2>
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
  } else {
    return (
      <Grid container justifyContent="center">
        <Grid container item xs={12} md={10}>
          <Paper elevation={3} sx={{ mt: 2 }}>
            <Box>
              <form onSubmit={handleSubmit}>
                {preguntas.length > 0 ? (
                  <Grid container item spacing={2}>
                    <Grid item md={6} marginTop="32px">
                      <Typography variant="h2" className="tiempo">
                        <AccessAlarmIcon
                          fontSize="40px"
                          justifyContent="center"
                          sx={{ color: "#26a9e1" }}
                        ></AccessAlarmIcon>
                        {formatTime(time)}
                      </Typography>

                      <Box
                        display="flex"
                        justifyContent="center"
                        marginLeft="50px"
                      >
                        <img
                          src={preguntas[currentQuestion].fotoPregunta}
                          style={{ width: "95%", height: "auto" }}
                        />
                      </Box>
                      <Box
                        display="flex"
                        justifyContent="center"
                        mt={2}
                        marginBottom="40px"
                        marginTop="20px"
                      >
                        <Button
                          className="ayuda"
                          onClick={() =>
                            handleClickOpen(
                              preguntas[currentQuestion].idpregunta
                            )
                          }
                          style={{
                            backgroundColor: "#84d0d3",
                            padding: "10px",
                            border: "2px solid #26a9e1",
                            borderRadius: "5px",
                          }}
                        >
                          <img
                            src="../../src/assets/pista.png"
                            style={{ width: "50px" }}
                            alt="Ayuda"
                          />
                          Ayuda! <br />+ 5 min.
                        </Button>
                      </Box>
                    </Grid>
                    <Grid item md={6} padding="20px">
                      <Box className="preguntas">
                        <Typography
                          variant="h5"
                          marginTop="24px"
                          style={{ fontSize: "36px" }}
                        >
                          {preguntas[currentQuestion].pregunta}
                        </Typography>

                        {open ? <Pista /> : ""}
                        {preguntas[currentQuestion].respuestas.map(
                          (respuestas) => (
                            <Grid
                              container
                              justifyContent="flex-start"
                              className="respuestas"
                              key={respuestas.idrespuestas}
                            >
                              <Grid item>
                                <input
                                  id={respuestas.idrespuestas}
                                  type="radio"
                                  name="option"
                                  value={respuestas.idrespuestas}
                                  onChange={handleOptionChange}
                                />
                              </Grid>
                              <Grid item>
                                <Box
                                  component="div"
                                  className="todas-respuestas"
                                  justifyContent="flex-start"
                                >
                                  <label htmlFor={respuestas.idrespuestas}>
                                    {respuestas.texto}
                                  </label>{" "}
                                </Box>
                              </Grid>

                              {error && <p>{error}</p>}
                            </Grid>
                          )
                        )}
                        <Box display="flex" justifyContent="center" mt={2}>
                          <Button
                            className="button"
                            type="submit"
                            variant="contained"
                            color="primary"
                          >
                            Confirmar
                          </Button>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                ) : (
                  <p>Cargando...</p>
                )}
              </form>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    );
  }
};

export default EscapeRoom;
