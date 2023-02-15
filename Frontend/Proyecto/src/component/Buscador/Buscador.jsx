import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";

function Buscador() {
  return (
    <form noValidate autoComplete="off">
      <TextField id="standard-basic" label="Buscar" />
      <IconButton aria-label="search">
        <SavedSearchIcon />
      </IconButton>
    </form>
  );
}

export default Buscador;
