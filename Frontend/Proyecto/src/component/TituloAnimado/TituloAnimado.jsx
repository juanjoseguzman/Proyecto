import Typist from "react-typist";

export default function TituloAnimado() {
  return (
    <Typist cursor={{ show: false }} loop={true}>
      <h2 className="titulo">
        Deja de hacer Turismo,
        <br />
        vive una Aventura
      </h2>
    </Typist>
  );
}
