import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./footerMaterial.css";

export default function FooterMaterial() {
  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="##">
          Onservatory
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  const footers = [
    {
      title: "Company",
      description: ["Aventuras", "Ciudades", "Destino", "Empresa"],
    },
    {
      title: "Legal",
      description: ["Politica", "Contacto", "Equipo", "FAQs"],
    },
  ];

  return (
    <>
      <Container
        maxWidth="xl"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={2} justifyContent="space-evenly">
          <a href="/">
            <img
              src="../../src/assets/logo-exity.png"
              alt="Logo"
              width="240"
              height="120"
              style={{ marginTop: "24px", padding: "24px" }}
            />
          </a>
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link
                      href={item}
                      variant="subtitle1"
                      color="text.secondary"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
          <div className="redes">
            <div>
              <h5>Síguenos en Redes Sociales:</h5>
            </div>
            <div>
              <a href="https://www.facebook.com/exitygame" target="_blank">
                <FacebookIcon style={{ fontSize: "70px", color: "#26a9e1" }} />
              </a>
              <a
                href="https://www.youtube.com/watch?v=SD44M1N8hbU"
                target="_blank"
              >
                <YouTubeIcon style={{ fontSize: "70px", color: "#26a9e1" }} />
              </a>
              <a href="https://twitter.com/exitygame" target="_blank">
                <TwitterIcon style={{ fontSize: "70px", color: "#26a9e1" }} />
              </a>
              <a href="https://www.instagram.com/exitygame" target="_blank">
                <InstagramIcon style={{ fontSize: "70px", color: "#26a9e1" }} />
              </a>
            </div>
          </div>
        </Grid>

        <Copyright sx={{ mt: 5 }} />
      </Container>
    </>
  );
}
