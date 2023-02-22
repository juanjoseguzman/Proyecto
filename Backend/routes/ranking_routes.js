import express from "express";
import ranking_controller from "../controller/ranking_controller.js";

const rankingRouter = express.Router();

rankingRouter.get("/:id", ranking_controller.getRankingByIdRutas);

export default rankingRouter;
