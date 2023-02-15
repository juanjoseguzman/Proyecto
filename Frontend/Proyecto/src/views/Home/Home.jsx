import Buscador from "../../component/Buscador/Buscador";
import Carrusel from "../../component/Carrusel/Carrusel";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./home.css";
import OpinionesCarousel from "../../component/OpinionesCarousel/OpinionesCarousel";

export default function Home() {
  return (
    <>
      <h1>HOME</h1>
      <Buscador />
      <div class="device">
        <div class="notch"></div>
        <div class="screen">
          <div class="content">
            <Carrusel />
          </div>
        </div>
        <div class="home"></div>
        <div class="camera"></div>
      </div>
      <a href="https://wa.link/c89dq5" target="_blank">
        <WhatsAppIcon style={{ fontSize: "70px", color: "#26a9e1" }} />
      </a>
      <OpinionesCarousel />
    </>
  );
}
