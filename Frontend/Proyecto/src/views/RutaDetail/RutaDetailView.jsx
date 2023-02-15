import { Button, Grid, Paper, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./RutaDetailView.css";
import { Link } from "react-router-dom";

export default function RutaDetailView({ ruta }) {
  return (
    <>
      <Grid
        container
        wrap="nowrap"
        gap="24px"
        sx={{
          px: "24px",
          marginTop: "24px",
          display: { xs: "none", md: "flex" },
        }}
      >
        {ruta ? (
          <>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={2}
                sx={{
                  backgroundImage: `url(${ruta.foto})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: 400,
                  width: 400,
                  height: 400,
                }}
              ></Paper>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h6">Nombre: {ruta.nombre}</Typography>
              <Typography variant="h6">Ciudad: {ruta.ciudad}</Typography>
              <Typography variant="h6">Tiempo: {ruta.tiempo}</Typography>
              <Typography variant="h6">
                Descripcion: {ruta.descripcion}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m54!1m12!1m3!1d6397.4635300555165!2d-4.4361109069722815!3d36.70498312072919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m39!3e2!4m5!1s0xd72f7817c584411%3A0x7a67b2eb09a0d974!2zQy4gVG9tw6FzIEVjaGV2ZXJyw61hLCA1LCAyOTAwMiBNw6FsYWdh!3m2!1d36.7048347!2d-4.4357245!4m5!1s0xd72f78416af814d%3A0xf03d279a3233400!2sParque%20de%20Huelin%2C%20M%C3%A1laga!3m2!1d36.7060317!2d-4.4325846!4m5!1s0xd72f78242aa52f7%3A0xa531b33ab048fae8!2sC.%20Jord%C3%A1n%20Marbella%2C%2029002%20M%C3%A1laga!3m2!1d36.706860299999995!2d-4.4375469999999995!4m5!1s0xd72f71bd4395bd1%3A0xdb2bbc88d5b17acf!2sRestaurante%20BAGAZO%2C%20Paseo%20Maritimo%20Antonio%20Machado%2C%20M%C3%A1laga!3m2!1d36.7034169!2d-4.4331781999999995!4m3!3m2!1d36.7056712!2d-4.4403166!4m3!3m2!1d36.707598!2d-4.4382781!4m5!1s0xd72f783cf5a506b%3A0x2dd67e1ef9092c0d!2sSofipan%20Panaderia%20y%20Restaurante%20Colombiano!3m2!1d36.706177!2d-4.4355006999999995!5e0!3m2!1ses!2ses!4v1675187910966!5m2!1ses!2ses"
                width="400"
                height="400"
                //style="border:20;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Grid>
          </>
        ) : (
          <Typography>Cargando...</Typography>
        )}
      </Grid>
      <Grid
        container
        gap="24px"
        sx={{
          marginTop: "24px",
          display: { xs: "flex", md: "none" },
        }}
      >
        {ruta ? (
          <>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={2}
                sx={{
                  backgroundImage: `url(${ruta.foto})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: 400,
                  width: 400,
                  height: 400,
                }}
              ></Paper>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h6">Nombre: {ruta.nombre}</Typography>
              <Typography variant="h6">Ciudad: {ruta.ciudad}</Typography>
              <Typography variant="h6">Tiempo: {ruta.tiempo}</Typography>
              <Typography variant="h6">
                Descripcion: {ruta.descripcion}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m54!1m12!1m3!1d6397.4635300555165!2d-4.4361109069722815!3d36.70498312072919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m39!3e2!4m5!1s0xd72f7817c584411%3A0x7a67b2eb09a0d974!2zQy4gVG9tw6FzIEVjaGV2ZXJyw61hLCA1LCAyOTAwMiBNw6FsYWdh!3m2!1d36.7048347!2d-4.4357245!4m5!1s0xd72f78416af814d%3A0xf03d279a3233400!2sParque%20de%20Huelin%2C%20M%C3%A1laga!3m2!1d36.7060317!2d-4.4325846!4m5!1s0xd72f78242aa52f7%3A0xa531b33ab048fae8!2sC.%20Jord%C3%A1n%20Marbella%2C%2029002%20M%C3%A1laga!3m2!1d36.706860299999995!2d-4.4375469999999995!4m5!1s0xd72f71bd4395bd1%3A0xdb2bbc88d5b17acf!2sRestaurante%20BAGAZO%2C%20Paseo%20Maritimo%20Antonio%20Machado%2C%20M%C3%A1laga!3m2!1d36.7034169!2d-4.4331781999999995!4m3!3m2!1d36.7056712!2d-4.4403166!4m3!3m2!1d36.707598!2d-4.4382781!4m5!1s0xd72f783cf5a506b%3A0x2dd67e1ef9092c0d!2sSofipan%20Panaderia%20y%20Restaurante%20Colombiano!3m2!1d36.706177!2d-4.4355006999999995!5e0!3m2!1ses!2ses!4v1675187910966!5m2!1ses!2ses"
                width="400"
                height="400"
                //style="border:20;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Grid>
          </>
        ) : (
          <Typography>Cargando...</Typography>
        )}
      </Grid>
      <Grid container md={12} justifyContent="center">
        <Link to="/play">
          <Button
            variant="contained"
            className="button-jugar"
            sx={{ backgroundColor: "#26a9e1" }}
            endIcon={<SendIcon />}
          >
            Play
          </Button>
        </Link>
      </Grid>
    </>
  );
}
