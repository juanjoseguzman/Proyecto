import * as React from "react";
import MUICard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import "./card.css";

export default function Card({ image, nombre, id }) {
  return (
    <Link to={`/${id}`}>
      <MUICard sx={{ maxWidth: 400 }}>
        <CardActionArea>
          <CardMedia
            className="cardzoom"
            component="img"
            height="350"
            image={image}
            alt={nombre}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {nombre}
            </Typography>
          </CardContent>
        </CardActionArea>
      </MUICard>
    </Link>
  );
}
