import { Grid, Paper, Typography } from "@mui/material";

export default function RutaDetailView({ ruta }) {
  return (
    <Grid container>
      {ruta ? (
        <>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={2}
              sx={{
                backgroundImage: `url(${ruta.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: 400,
              }}
            ></Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h6">Nombre: {character.name}</Typography>
            <Typography variant="h6">Estado: {character.status}</Typography>
            <Typography variant="h6">Especie: {character.species}</Typography>
            <Typography variant="h6">Genero: {character.gender}</Typography>
            <Typography variant="h6">Origen: {ruta.origin.name}</Typography>
            <Typography variant="h6">
              Localizacion: {ruta.location.name}
            </Typography>
          </Grid>
        </>
      ) : (
        <Typography>Cargando...</Typography>
      )}
    </Grid>
  );
}
