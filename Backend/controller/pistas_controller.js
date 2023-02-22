import { currentDir } from "../index.js";
import dao from "../services/dao.js";

const controller = {};

const __dirname = currentDir().__dirname;

controller.getPistasById = async (req, res) => {
  try {
    let pistas = await dao.getPistasById(req.params.id);

    if (pistas.length <= 0) return res.status(404).send("No existe pista");
    [pistas] = pistas;
    return res.status(200).send(pistas);
  } catch (e) {
    return res.status(400).send(e.message);
  }
};

export default controller;
