import express from "express";
import respuestas_controller from "../controller/respuestas_controller.js";

const respuestasRouter = express.Router();

respuestasRouter.get("/:id", respuestas_controller.getRespuestasById);

export default respuestasRouter;
