import { Typography, Grid, Container } from "@mui/material";

import Card from "../../component/Card/Card";

export default function AventurasView({ rutas }) {
  return (
    <>
      <Container maxWidth="xxl">
        <Grid
          container
          spacing={2}
          sx={{
            pl: "42px",
            marginTop: "42px",
          }}
        >
          {rutas ? (
            rutas.map(({ idrutas, nombre, foto }) => (
              <Grid item key={idrutas} xs={12} sm={6} md={4} marginBottom={4}>
                <Card key={idrutas} id={idrutas} nombre={nombre} image={foto} />
              </Grid>
            ))
          ) : (
            <Typography>No hay ruta</Typography>
          )}
        </Grid>
      </Container>
    </>
  );
}
