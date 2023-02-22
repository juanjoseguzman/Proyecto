import { currentDir } from "../index.js";
import dao from "../services/dao.js";

const controller = {};

const __dirname = currentDir().__dirname;

controller.getRespuestasById = async (req, res) => {
  try {
    let respuestas = await dao.getRespuestasById(req.params.id);
    if (respuestas.length <= 0)
      return res.status(404).send("La ruta no existe");
    return res.send(respuestas);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

export default controller;
