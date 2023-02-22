import { currentDir } from "../index.js";
import dao from "../services/dao.js";

const controller = {};

const __dirname = currentDir().__dirname;

controller.getPreguntasById = async (req, res) => {
  try {
    let preguntas = await dao.getPreguntasById(req.params.id);
    for (const pregunta of preguntas) {
      const respuestas = await dao.getRespuestasById(pregunta.idpregunta);
      pregunta.respuestas = respuestas;
    }
    console.log(preguntas);
    if (preguntas.length <= 0) return res.status(404).send("La ruta no existe");
    return res.send(preguntas);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

export default controller;
