import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import Home from "./views/Home/Home";
import Politica from "./views/Politica/Politica";
import FAQs from "./views/FAQs/FAQs";
import Aventuras from "./component/Aventuras/Aventuras";
import RutaDetail from "./views/RutaDetail";
import Login from "./views/Login/Login";
import Play from "./views/PlayView/PlayView";
import Destino from "./views/Destino/Destino";
import Empresa from "./views/Empresa/Empresa";
import { AuthContextProvider } from "./Context/AuthContext";
import Perfil from "./views/Perfil/Perfil";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="aventuras" element={<Aventuras />} />
            <Route path="ciudades" element={<Aventuras />} />
            <Route path=":id" element={<RutaDetail />} />
            <Route path="politica" element={<Politica />} />
            <Route path="FAQs" element={<FAQs />} />
            <Route path="login" element={<Login />} />
            <Route path="play" element={<Play />} />
            <Route path="destino" element={<Destino />} />
            <Route path="empresa" element={<Empresa />} />
            <Route path="perfil/:id" element={<Perfil />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
