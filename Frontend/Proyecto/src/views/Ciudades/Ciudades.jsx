import { Typography, Grid } from "@mui/material";
import Card from "../../component/Card/Card";

const ciudad = [
  {
    nombre: "Málaga",
    foto: "https://images.unsplash.com/photo-1612972735944-ed73dd220d21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFsYWdhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    nombre: "Madrid",
    foto: "https://media.istockphoto.com/id/116282124/es/foto/cibeles.jpg?s=612x612&w=0&k=20&c=CZ_xRcLWtsMaZ0QHsmsQysh1pYCwAN9My-nDkGtQ1LI=",
  },
  {
    nombre: "Sevilla",
    foto: "https://images.unsplash.com/photo-1569323811684-d0d8e45893ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2V2aWxsYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    nombre: "Barcelona",
    foto: "https://media.istockphoto.com/id/177138682/es/foto/gaud%C3%AD-el-parque-g%C3%BCell-en-barcelona.jpg?s=612x612&w=0&k=20&c=JG589EdgzkyghwSFkfTluWdRKnADXBkuTs4A-maUbf4=",
  },
  {
    nombre: "Granada",
    foto: "https://images.unsplash.com/photo-1564740603199-5f56138c6679?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWxoYW1icmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    nombre: "Alicante",
    foto: "https://images.unsplash.com/photo-1502919963290-40096b6983ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWxpY2FudGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
];

export default function Ciudades() {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          px: "42px",
          marginTop: "42px",
        }}
      >
        {ciudad ? (
          ciudad.map(({ idrutas, nombre, foto }) => (
            <Grid item key={idrutas} xs={12} sm={6} md={4}>
              <Card
                key={idrutas}
                id={`ciudades/${nombre}`}
                nombre={nombre}
                image={foto}
              />
            </Grid>
          ))
        ) : (
          <Typography>No hay ruta</Typography>
        )}
      </Grid>
    </>
  );
}
