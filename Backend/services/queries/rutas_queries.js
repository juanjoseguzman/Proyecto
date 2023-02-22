import db from "../mysql.js";

const rutasQueries = {};

rutasQueries.getRutasById = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM rutas WHERE idrutas = ?",
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

rutasQueries.getRutas = async () => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query("SELECT * FROM rutas", [], "select", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

export default rutasQueries;
