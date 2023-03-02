import { Button, Grid, Paper, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./RutaDetailView.css";
import { Link } from "react-router-dom";
import UpdateIcon from "@mui/icons-material/Update";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RouteIcon from "@mui/icons-material/Route";
import DescriptionIcon from "@mui/icons-material/Description";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ButtonRanking from "../../component/Ranking/Ranking";

export default function RutaDetailView({ ruta }) {
  const { id } = useParams();

  const [ranking, setRanking] = useState([]);

  useEffect(function () {
    async function fetchData() {
      const response = await fetch(`http://localhost:3000/ranking/${id}`);
      const data = await response.json();
      setRanking(data);
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Grid
        container
        wrap="nowrap"
        gap="42px"
        sx={{
          px: "42px",
          marginTop: "42px",
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
              <Grid xs={12}>
                <Grid>
                  <Grid container justifyContent="space-between">
                    <Typography variant="h6">
                      <RouteIcon></RouteIcon> Nombre: {ruta.nombre}
                    </Typography>
                    <ButtonRanking ranking={ranking} />
                  </Grid>

                  <Typography variant="h6">
                    <LocationOnIcon></LocationOnIcon> Ciudad: {ruta.ciudad}
                  </Typography>
                  <Typography variant="h6">
                    <UpdateIcon></UpdateIcon> Tiempo: {ruta.tiempo} horas
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="h6">
                <DescriptionIcon></DescriptionIcon> Descripcion:{" "}
                {ruta.descripcion}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <iframe
                src={ruta.mapa}
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
              <Grid item xs={12} md={4}>
                <Typography variant="h6">Nombre: {ruta.nombre}</Typography>
                <Typography variant="h6">Ciudad: {ruta.ciudad}</Typography>
                <Typography variant="h6">Tiempo: {ruta.tiempo}</Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <ButtonRanking ranking={ranking} />
              </Grid>
              <Typography variant="h6">
                Descripcion: {ruta.descripcion}
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <iframe
                src={ruta.mapa}
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
        <Link to={`/play/${id}`}>
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
