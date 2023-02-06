import * as React from "react";
import MUICard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "../Link/Link";

export default function Card({ image, title, description, id }) {
  return (
    <Link to={`${id}`}>
      <MUICard sx={{ maxWidth: 400 }}>
        <CardActionArea>
          <CardMedia component="img" height="350" image={image} alt={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </MUICard>
    </Link>
  );
}
