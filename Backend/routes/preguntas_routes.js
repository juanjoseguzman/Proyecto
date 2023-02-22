import express from "express";
import preguntas_controller from "../controller/preguntas_controller.js";

const preguntasRouter = express.Router();

preguntasRouter.get("/:id", preguntas_controller.getPreguntasById);

export default preguntasRouter;
