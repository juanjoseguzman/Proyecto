import { useState, useEffect } from "react";
import AventurasView from "../../views/Aventuras/AventurasView";

export default function Aventuras() {
  const [rutas, setRutas] = useState(null);

  useEffect(function () {
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setRutas(data.results);
    }
    fetchData();
  }, []);
  return <AventurasView rutas={rutas} />;
}
