import { useState, useEffect } from "react";
import AventurasView from "../../views/Aventuras/AventurasView";

export default function Aventuras() {
  const [rutas, setRutas] = useState([]);

  useEffect(function () {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/rutas");
      const data = await response.json();
      setRutas(data);
    }
    fetchData();
  }, []);
  return <AventurasView rutas={rutas} />;
}
