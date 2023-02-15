import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import "./formLogin.css";

export default function FormLogin() {
  const { login, auth } = useAuthContext();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  });

  function handleLogin(event) {
    const newUser = {
      ...user,
      [event.target.name]: event.target.value,
    };
    setUser(newUser);
  }

  return (
    <>
      <div>
        <h1>Login</h1>
        <form onSubmit={(e) => login(e, user)}>
          <input
            type="email"
            value={user.email}
            onChange={handleLogin}
            placeholder="introduce email"
            name="email"
          />
          <input
            type="password"
            value={user.password}
            onChange={handleLogin}
            placeholder="introduce password"
            name="password"
          />{" "}
          <button className="button">Iniciar</button>
        </form>
      </div>
    </>
  );
}
