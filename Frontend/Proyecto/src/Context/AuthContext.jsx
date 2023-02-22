import jwtDecode from "jwt-decode";
import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";

const AuthContext = createContext({
  auth: null,
  dataToken: {
    id: null,
    email: null,
    role: null,
  },
  login: () => {},
  logout: () => {},
});

export default AuthContext;

const MY_AUTH_APP = "MY_AUTH_APP";
const MY_AUTH_APP_DATA = "MY_AUTH_APP_DATA";

export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(
    window.localStorage.getItem(MY_AUTH_APP) ?? null
  );

  const [dataToken, setDataToken] = useState(
    JSON.parse(window.localStorage.getItem(MY_AUTH_APP_DATA)) ?? {
      id: null,
      email: null,
      role: null,
    }
  );
  async function login(e, user) {
    e.preventDefault();

    await fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => {
        console.log(response.status);
        if (response.status == 400) {
          alert("error al recibir el body");
        } else if (response.status == 200) {
          return response.json();
        } else if (response.status == 404) {
          Swal.fire({
            icon: "error",
            title: "Error...",
            text: "Usuario No Registrado",
          });
        } else if (response.status == 401) {
          Swal.fire({
            icon: "error",
            title: "Error...",
            text: "Usuario o Contraseña Incorrecta",
          });
        }
      })
      .then((data) => {
        setAuth(data.jwt);
        setDataToken(jwtDecode(data.jwt));
        window.localStorage.setItem(
          MY_AUTH_APP_DATA,
          JSON.stringify(jwtDecode(data.jwt))
        );
      });
  }

  function logout() {
    window.localStorage.removeItem(MY_AUTH_APP);
    window.localStorage.removeItem(MY_AUTH_APP_DATA);
    setAuth(null);
    setDataToken({
      id: null,
      email: null,
      role: null,
    });
  }

  const value = {
    auth,
    dataToken,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
