import pistasQueries from "./queries/pistas_queries.js";
import preguntasQueries from "./queries/preguntas_queries.js";
import rankingQueries from "./queries/ranking_queries.js";
import respuestasQueries from "./queries/respuestas_queries.js";
import rutasQueries from "./queries/rutas_queries.js";
import userQueries from "./queries/user_queries.js";

const dao = {};

//usuarios:
dao.getUserbyEmail = async (email) => await userQueries.getUserbyEmail(email);

dao.addUser = async (userData) => await userQueries.addUser(userData);

dao.getUserById = async (id) => await userQueries.getUserById(id);

dao.deleteUser = async (id) => await userQueries.deleteUser(id);

dao.updateUser = async (id, userData) =>
  await userQueries.updateUser(id, userData);

//rutas:
dao.getRutasById = async (idrutas) => await rutasQueries.getRutasById(idrutas);

dao.getRutas = async () => await rutasQueries.getRutas();

//preguntas:
dao.getPreguntasById = async (id) =>
  await preguntasQueries.getPreguntasById(id);

//respuestas:
dao.getRespuestasById = async (id) =>
  await respuestasQueries.getRespuestasById(id);

//ranking:
dao.getRankingByIdRutas = async (id) =>
  await rankingQueries.getRankingByIdRutas(id);

//pistas:
dao.getPistasById = async (id) => await pistasQueries.getPistasById(id);

export default dao;
