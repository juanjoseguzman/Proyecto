import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RutaDetailView from "./RutaDetailView";

export default function RutaDetail() {
  const { id } = useParams();
  console.log(id, "id");
  const [ruta, setRuta] = useState(null);

  useEffect(function () {
    async function fetchData() {
      const response = await fetch(`http://localhost:3000/rutas/${id}`);
      const data = await response.json();
      setRuta(data);
      console.log(data);
    }
    fetchData();
  }, []);
  return <RutaDetailView ruta={ruta} />;
}
