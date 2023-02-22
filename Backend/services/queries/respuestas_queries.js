import db from "../mysql.js";

const respuestasQueries = {};

respuestasQueries.getRespuestasById = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM respuestas WHERE idpreguntas = ?",
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

export default respuestasQueries;
