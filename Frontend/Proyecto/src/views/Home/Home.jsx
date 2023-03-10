import Buscador from "../../component/Buscador/Buscador";
import Carrusel from "../../component/Carrusel/Carrusel";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./home.css";
import Slider from "../../component/Slider/Slider";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CarruselImagen from "../../component/CarruselImagen/CarruselImagen";
import { Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import VideoExity from "../../component/VideoExity/VideoExity";
import TituloAnimado from "../../component/TituloAnimado/TituloAnimado";

export default function Home() {
  return (
    <>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ marginBottom: "2rem" }}
          flexWrap="nowrap"
        >
          <Grid item xs={12} md={6}>
            <VideoExity />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{ fontSize: "70px", color: "#26a9e1" }}
          >
            <TituloAnimado />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          className="movil"
        >
          <Grid item xs={12} md={5}>
            <div className="como">
              <h1>¿Cómo es Exity?</h1>
              <h5>
                <CheckOutlinedIcon /> Descubre nuevos lugares
              </h5>
              <h5>
                <CheckOutlinedIcon /> Aprende historias desconocidas
              </h5>
              <h5>
                <CheckOutlinedIcon /> Resuelve puzzles y acertijos
              </h5>
              <h5>
                <CheckOutlinedIcon /> Sé protagonista de la aventura
              </h5>
              <h5>
                <CheckOutlinedIcon /> Lidera el ranking
              </h5>
              <h5>
                <CheckOutlinedIcon /> A tu aire, sin horarios
              </h5>
              <Link to="/aventuras">
                <button className="button" type="submit">
                  Empieza a Jugar
                </button>
              </Link>
              <h2>
                Nuestro WhatsApp:
                <a href="https://wa.link/c89dq5" target="_blank">
                  <WhatsAppIcon
                    style={{ fontSize: "70px", color: "#26a9e1" }}
                  />
                </a>
              </h2>
            </div>
          </Grid>

          <Grid item xs={12} md={3}>
            <div className="qr">
              <img src="../src/assets/Qr.png" width="200px" />
              <img src="../src/assets/google-play.png" width="200px" />
            </div>
          </Grid>

          <Grid item xs={12} md={4}>
            <div className="device">
              <div className="notch"></div>
              <div className="screen">
                <div className="content">
                  <Carrusel />
                </div>
              </div>
              <div className="home"></div>
              <div className="camera"></div>
            </div>
          </Grid>
        </Grid>
        <CarruselImagen />
        <Slider />
      </Container>
    </>
  );
}
