import db from "../mysql.js";

const rankingQueries = {};

rankingQueries.getRankingByIdRutas = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT usuarios.nombre, reloj FROM ranking JOIN usuarios on ranking.idusuario = usuarios.idusuarios WHERE idrutas = ? ORDER BY reloj ASC",
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

rankingQueries.addRanking = async (ranking) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    let rankingObj = {
      idusuario: ranking.idusuario,
      idrutas: ranking.idrutas,
      reloj: ranking.reloj,
    };
    return await db.query(
      "INSERT INTO ranking SET ?",
      rankingObj,
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

export default rankingQueries;
