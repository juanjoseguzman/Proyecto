import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import "./header.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";

const pages = ["Aventuras", "Ciudades", "Destino", "Empresa"];

export default function Header() {
  const { auth, dataToken, logout } = useAuthContext();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const settings = [
    { nombre: "Perfil", path: `/perfil/${dataToken.id}` },
    { nombre: "Dashboard", path: "/" },
  ];

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);

  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleCloseUserMenu = () => setAnchorElUser(null);

  function handleLogout() {
    logout();
    setAnchorElUser(null);
  }

  return (
    <AppBar position="static" sx={{ background: "#26a9e1", fontSize: "70px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <a href="/">
            <img
              src="../../src/assets/logo-blanco.png"
              alt="Logo"
              width="240"
              height="120"
              style={{ marginTop: "24px" }}
            />
          </a>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <Link to={page} key={index}>
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Link to={page} key={index}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontSize: "24px",
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          {auth ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={dataToken.email.toUpperCase()}
                    src="/"
                    sx={{ width: 64, height: 64, fontSize: 36 }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((ajuste) => (
                  <MenuItem key={ajuste.nombre} onClick={handleCloseUserMenu}>
                    <Link textAlign="center" to={`${ajuste.path}`}>
                      {ajuste.nombre}
                    </Link>
                  </MenuItem>
                ))}
                <MenuItem key={"logout"} onClick={handleLogout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Link to="/login">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "#26a9e1",
                  fontSize: "24px",
                }}
              >
                LOGIN
              </Button>
            </Link>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
