import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import Home from "./views/Home/Home";
import Politica from "./views/Politica/Politica";
import FAQs from "./views/FAQs/FAQs";
import Aventuras from "./component/Aventuras/Aventuras";
import RutaDetail from "./views/RutaDetail/RutaDetailView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Aventuras" element={<Aventuras />} />
          <Route path=":id" element={<RutaDetail />} />
          <Route path="Politica" element={<Politica />} />
          <Route path="FAQs" element={<FAQs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
