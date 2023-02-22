import db from "../mysql.js";

const preguntasQueries = {};

preguntasQueries.getPreguntasById = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM preguntas WHERE idrutas = ?",
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

export default preguntasQueries;
