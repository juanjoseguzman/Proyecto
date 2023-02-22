import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import "./buscador.css";

function Buscador() {
  return (
    <div className="buscador-container">
      <form className="buscador" noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Busca tu Aventura"
          inputProps={{ style: { fontSize: 24, height: 48 } }}
        />
        <IconButton aria-label="search" style={{ fontSize: 32 }}>
          <SavedSearchIcon />
        </IconButton>
      </form>
    </div>
  );
}

export default Buscador;
