import express from "express";
import rutasController from "../controller/rutas_controller.js";

const rutasRouter = express.Router();

rutasRouter.get("/", rutasController.getRutas);

rutasRouter.get("/:id", rutasController.getRutasById);

export default rutasRouter;
