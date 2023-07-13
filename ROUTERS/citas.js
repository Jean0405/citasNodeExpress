import mysql from "mysql2/promise";
import { Router } from "express";

const STORAGE_CITAS = Router();
let conn = undefined;

STORAGE_CITAS.use(async (req, res, next) => {
  try {
    let CONFIG_CONN = JSON.parse(process.env.MY_CONNECTION);
    conn = await mysql.createPool(CONFIG_CONN);
    next();
  } catch (error) {
    res.send(error + "-> CONNECTION ERROR");
  }
});

STORAGE_CITAS.get("/?orden=:order", async (req, res) => {
  const order = req.params.order.toUpperCase();
  try {
    const [rows, fields] = await conn.execute(
      /*sql*/ `SELECT * FROM cita ORDER BY cit_fecha ${order}`
    );
    res.send(rows);
  } catch (error) {
    res.status(500).json({ message: "ERROR TO GET DATA", error: error });
  }
});

STORAGE_CITAS.get("/fecha", async (req, res) => {
  const cit_fecha = req.body.cit_fecha;
  console.log(cit_fecha);
  try {
    const [rows, fields] = await conn.execute(
      /*sql*/ `SELECT
    usuario.usu_id,
    usuario.usu_nombre,
    medico.med_nombreCompleto,
    cita.cit_fecha
FROM cita
    INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
    INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional
WHERE
    cita.cit_fecha = ?`,
      [cit_fecha]
    );
    res.send(rows);
  } catch (error) {
    res.status(500).json({ message: "ERROR TO GET DATA", error: error });
  }
});

STORAGE_CITAS.get("/citas_genero/?genero=:gen", async (req, res) => {
  const gen = req.params.gen.toUpperCase();
  console.log(gen);
  try {
    const [rows, fields] = await conn.execute(
      /*sql*/ `SELECT
    cita.cit_fecha,
    usuario.usu_nombre,
    genero.gen_nombre
FROM cita
    INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
    INNER JOIN genero ON usuario.usu_genero = genero.gen_id
WHERE
    genero.gen_abreviatura = ?`,
      [gen]
    );
    res.send(rows);
  } catch (error) {
    res.status(500).json({ message: "ERROR TO GET DATA", error: error });
  }
});

STORAGE_CITAS.get("/?citas_estado=:estado", async (req, res) => {
  const estado = req.params.estado.toUpperCase();
  console.log(estado);
  try {
    const [rows, fields] = await conn.execute(
      /*sql*/ `SELECT
    cita.cit_fecha AS fecha_cita,
    usuario.usu_nombre AS paciente,
    medico.med_nombreCompleto AS medico
FROM cita
    INNER JOIN estado_cita ON cita.cit_estadoCita = estado_cita.estcita_id
    INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id
    INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional
WHERE
    estado_cita.estcita_nombre = ?;`,
      [estado]
    );
    res.send(rows);
  } catch (error) {
    res.status(500).json({ message: "ERROR TO GET DATA", error: error });
  }
});

export default STORAGE_CITAS;
