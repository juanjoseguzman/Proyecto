import express from "express";
import pistas_controller from "../controller/pistas_controller.js";

const pistasRouter = express.Router();

pistasRouter.get("/:id", pistas_controller.getPistasById);

export default pistasRouter;
