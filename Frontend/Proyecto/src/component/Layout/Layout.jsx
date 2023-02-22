import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FooterMaterial from "../FooterMaterial/FooterMaterial";

export default function Layout() {
  return (
    <>
      <Header />

      <Outlet />
      <FooterMaterial />
    </>
  );
}
