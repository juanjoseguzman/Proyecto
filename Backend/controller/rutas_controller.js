import { currentDir } from "../index.js";
import dao from "../services/dao.js";

const controller = {};

const __dirname = currentDir().__dirname;

controller.getRutas = async (req, res) => {
  try {
    const rutas = await dao.getRutas();
    if (rutas.length <= 0) return res.status(404).send("La ruta no existe");

    return res.send(rutas);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

controller.getRutasById = async (req, res) => {
  try {
    let rutas = await dao.getRutasById(req.params.id);
    if (rutas.length <= 0) return res.status(404).send("La ruta no existe");
    [rutas] = rutas;
    return res.send(rutas);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

export default controller;
