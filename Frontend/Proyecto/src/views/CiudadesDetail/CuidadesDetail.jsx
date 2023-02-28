import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AventurasView from "../Aventuras/AventurasView";

export default function CiudadesDetail() {
  const { ciudad } = useParams();
  const [ciudades, setCiudades] = useState([]);

  useEffect(function () {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:3000/rutas/ciudad/${ciudad}`
      );
      const data = await response.json();
      setCiudades(data);
    }
    fetchData();
  }, []);
  return <AventurasView rutas={ciudades} />;
}
