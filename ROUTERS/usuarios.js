import mysql from "mysql2/promise";
import { Router } from "express";

const STORAGE_PACIENTES = Router();

let conn = undefined;

STORAGE_PACIENTES.use(async (req, res, next) => {
  try {
    let CONFIG_CONN = JSON.parse(process.env.MY_CONNECTION);
    conn = await mysql.createPool(CONFIG_CONN);
    next();
  } catch (error) {
    res.send(500).send(error + "CONNECTION ERROR");
  }
});

STORAGE_PACIENTES.get("/", async (req, res) => {
  try {
    const [rows, fields] = await conn.execute(/*sql*/ `SELECT * FROM usuario`);
    res.send(rows);
  } catch (error) {
    res.status(500).json({ message: "ERROR TO GET DATA", error: error });
  }
});

STORAGE_PACIENTES.get("/:usu_id", async (req, res) => {
  const usu_id = req.params.usu_id;
  console.log(usu_id);
  try {
    const [rows, fields] = await conn.execute(
      /*sql*/ `SELECT u.usu_nombre AS nombre_paciente , c.cit_fecha AS cita_proxima FROM cita c INNER JOIN usuario u ON c.cit_datosUsuario = u.usu_id WHERE c.cit_datosUsuario = ?
      AND c.cit_fecha >= CURDATE()ORDER BY c.cit_fecha ASC LIMIT 1`,
      [usu_id]
    );
    res.send(rows);
  } catch (error) {
    res.status(500).json({ message: "ERROR TO GET DATA", error: error });
  }
});

export default STORAGE_PACIENTES;
