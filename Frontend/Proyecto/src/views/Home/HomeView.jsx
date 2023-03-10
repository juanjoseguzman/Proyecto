import { Typography, Grid } from "@mui/material";
import Card from "../../component/Card/Card";

export default function HomeView({ characters }) {
  console.log(characters);
  return (
    <>
      <Grid container spacing={2}>
        {characters ? (
          characters.map(({ name, id, image, species, location, status }) => (
            <Grid item key={id} xs={12} sm={6} md={4}>
              <Card
                key={id}
                id={id}
                title={name}
                description={`Es de la especia ${species}, vive en ${location.name} y esta ${status}`}
                image={image}
              />
            </Grid>
          ))
        ) : (
          <Typography>No hay personas por el momento</Typography>
        )}
      </Grid>
    </>
  );
}
