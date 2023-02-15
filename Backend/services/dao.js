import rutasQueries from "./queries/rutas_queries.js";
import userQueries from "./queries/user_queries.js";

const dao = {};

dao.getUserbyEmail = async (email) => await userQueries.getUserbyEmail(email);

dao.addUser = async (userData) => await userQueries.addUser(userData);

dao.getUserById = async (id) => await userQueries.getUserById(id);

dao.deleteUser = async (id) => await userQueries.deleteUser(id);

dao.updateUser = async (id, userData) =>
  await userQueries.updateUser(id, userData);

dao.getRutasById = async (idrutas) => await rutasQueries.getRutasById(idrutas);

dao.getRutas = async () => await rutasQueries.getRutas();

export default dao;
