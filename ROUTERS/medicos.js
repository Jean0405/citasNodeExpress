import mysql from "mysql2/promise";
import { Router } from "express";
import proxyMedicosID from "../MIDDLEWARE/proxyMedicosID.js";
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

STORAGE_MEDICOS.get("/?med_especialidad=:especialidad", async (req, res) => {
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

STORAGE_MEDICOS.get("/?med_id=:med_id", proxyMedicosID, async (req, res) => {
  const med_id = req.params.med_id;
  console.log(med_id);
  try {
    const [rows, fields] = await conn.execute(
      /*sql*/ `SELECT
    usuario.*,
    cita.cit_fecha,
    medico.med_nroMatriculaProsional,
    medico.med_nombreCompleto
FROM usuario
    INNER JOIN cita ON usuario.usu_id = cita.cit_datosUsuario
    INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional
WHERE
    medico.med_nroMatriculaProsional = ?`,
      [med_id]
    );
    res.send(rows);
  } catch (error) {
    res.status(500).json({ message: "ERROR TO GET DATA", error: error });
  }
});

STORAGE_MEDICOS.get("/medicos_consultorios", async (req, res) => {
  try {
    const [rows, fields] = await conn.execute(/*sql*/ `SELECT
    medico.med_nroMatriculaProsional AS id,
    medico.med_nombreCompleto AS nombre,
    especialidad.esp_nombre AS especialidad,
    consultorio.cons_nombre AS consultorio
FROM medico
    INNER JOIN consultorio ON medico.med_consultorio = consultorio.cons_codigo
    INNER JOIN especialidad ON medico.med_especialidad = especialidad.esp_id`);
    res.send(rows);
  } catch (error) {
    res.status(500).json({ message: "ERROR TO GET DATA", error: error });
  }
});

STORAGE_MEDICOS.get(
  "/medico_citas/?med_id=:med_id",
  proxyMedicosID,
  async (req, res) => {
    const med_nroMatriculaProsional = req.params.med_id;
    const cit_fecha = req.body.cit_fecha;
    console.log(med_nroMatriculaProsional);
    console.log(cit_fecha);
    try {
      const [rows, fields] = await conn.execute(
        /*sql*/ `SELECT
    COUNT(*) AS total_citas,
    cita.cit_fecha,
    medico.med_nombreCompleto
FROM cita
    INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional
WHERE
    medico.med_nroMatriculaProsional = ?
    AND cita.cit_fecha = ? GROUP BY cita.cit_fecha, medico.med_nombreCompleto`,
        [med_nroMatriculaProsional, cit_fecha]
      );
      res.send(rows);
    } catch (error) {
      res.status(500).json({ message: "ERROR TO GET DATA", error: error });
    }
  }
);

export default STORAGE_MEDICOS;
