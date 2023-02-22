import db from "../mysql.js";

const pistasQueries = {};

pistasQueries.getPistasById = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT texto FROM proyecto.pistas where idpregunta = ?",
      id,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

export default pistasQueries;
