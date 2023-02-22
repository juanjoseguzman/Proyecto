import Buscador from "../../component/Buscador/Buscador";
import Carrusel from "../../component/Carrusel/Carrusel";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./home.css";
import Slider from "../../component/Slider/Slider";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CarruselImagen from "../../component/CarruselImagen/CarruselImagen";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <div className="div-buscador">
        <Typography
          variant="h5"
          style={{
            fontFamily: "Arial",
            fontWeight: "bold",
            fontSize: 48,
            textAlign: "center",
          }}
        >
          Deja de hacer turismo,
          <br />
          vive una aventura
        </Typography>
        <Buscador />
        <a href="https://wa.link/c89dq5" target="_blank">
          <WhatsAppIcon style={{ fontSize: "70px", color: "#26a9e1" }} />
        </a>
      </div>
      <div className="movil">
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
          <button className="button" type="submit">
            Empieza a Jugar
          </button>
        </div>
        <div className="qr">
          <img src="../src/assets/Qr.jpg" width="200px" />
          <img src="../src/assets/google-play.png" width="200px" />
        </div>

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
      </div>
      <CarruselImagen />
      <Slider />
    </>
  );
}
