import mysql from "mysql2/promise";
import { Router } from "express";

const STORAGE_MEDICOS = Router();

let conn = undefined;

STORAGE_MEDICOS.use(async (req, res, next) => {
  try {
    let CONFIG_CONN = JSON.parse(process.env.MY_CONNECTION);
    conn = await mysql.createPool(CONFIG_CONN);
    next();
  } catch (error) {
    res.send(500).send(error + "CONNECTION ERROR");
  }
});

STORAGE_MEDICOS.get("/:especialidad", async (req, res) => {
  const especialidad = req.params.especialidad;
  console.log(req.params);
  try {
    const [rows, fields] = await conn.execute(
      /*sql*/ `SELECT medico.med_nombreCompleto, especialidad.esp_nombre AS especialidad FROM medico INNER JOIN especialidad ON medico.med_especialidad = especialidad.esp_id WHERE especialidad.esp_nombre = ?`,
      [especialidad]
    );
    res.send(rows);
  } catch (error) {
    res.status(500).json({ message: "ERROR TO GET DATA", error: error });
  }
});

export default STORAGE_MEDICOS;
