import Typist from "react-typist";

export default function TituloAnimado() {
  return (
    <Typist cursor={{ show: false }} loop={true}>
      <h2 className="titulo">
        Deja de hacer turismo,
        <br />
        vive una aventura
      </h2>
    </Typist>
  );
}
