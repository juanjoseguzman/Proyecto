import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <Grid container padding={2}>
        <Outlet />
      </Grid>
      <Footer />
    </>
  );
}
