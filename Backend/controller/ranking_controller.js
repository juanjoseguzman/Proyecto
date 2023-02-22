import { currentDir } from "../index.js";
import dao from "../services/dao.js";

const controller = {};

const __dirname = currentDir().__dirname;

controller.getRankingByIdRutas = async (req, res) => {
  const { id } = req.params;
  try {
    let rutas = await dao.getRankingByIdRutas(id);
    if (rutas.length <= 0) return res.status(404).send("Ranking no existe");

    return res.send(rutas);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

export default controller;
