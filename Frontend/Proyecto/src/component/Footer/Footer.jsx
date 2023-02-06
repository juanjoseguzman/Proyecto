import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer({ logo }) {
  return (
    <footer>
      <section className="logo-susbribete">
        <div className="politicas">
          <div>
            <a href="/HTML/index.html">
              <img src={logo} alt="logo" width="320px" />
            </a>
            <div className="lista">
              <ul>
                <li>
                  <Link to="/Aventuras">Aventuras</Link>
                </li>
                <li>Ciudades</li>
                <li>Destinos</li>
                <li>Empresa</li>
              </ul>
              <ul>
                <li>
                  <Link to="/Politica">Politica de privacidad</Link>
                </li>
                <li>Contacto</li>
                <li>Equipo</li>
                <li>
                  <Link to="/FAQs">FAQs</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="suscribete">
          <h5>Unete a nuestra newsletter</h5>
          <form>
            <div className="suscribirme">
              <input
                type="email"
                name="email"
                placeholder="introduce tu email"
              />
              <button className="button" type="submit">
                Suscribirme
              </button>
              <br />
            </div>
            <input type="checkbox" name="acepto" id="acepto" />
            <label htmlFor="acepto">Acepto Politica de privacidad</label>
          </form>
        </div>
      </section>
      <section className="politicas-redes">
        <div className="redes">
          <h5>Síguenos en redes</h5>
          <a href="https://www.facebook.com" target="_blank">
            <FacebookIcon style={{ fontSize: "70px", color: "#11999e" }} />
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <YouTubeIcon style={{ fontSize: "70px", color: "#11999e" }} />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <TwitterIcon style={{ fontSize: "70px", color: "#11999e" }} />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <InstagramIcon style={{ fontSize: "70px", color: "#11999e" }} />
          </a>
        </div>
      </section>
    </footer>
  );
}
