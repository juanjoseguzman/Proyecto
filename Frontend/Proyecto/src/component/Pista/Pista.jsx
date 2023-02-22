export default function Pista({ idpregunta }) {
  useEffect(function () {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:3000/pistas/${idpregunta}`
      );
      const data = await response.json();
    }
    fetchData();
  }, []);
}
