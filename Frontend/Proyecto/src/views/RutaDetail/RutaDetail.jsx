import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CharacterDetailView from "./CharacterDetailView";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(function () {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await response.json();
      setCharacter(data);
    }
    fetchData();
  }, []);
  return <CharacterDetailView character={character} />;
}
