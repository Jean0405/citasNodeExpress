import mysql from "mysql2/promise";
import { Router } from "express";

const STORAGE_CONSULTORIAS = Router();

let conn = undefined;

STORAGE_CONSULTORIAS.use(async (req, res, next) => {
  try {
    let CONFIG_CONN = JSON.parse(process.env.MY_CONNECTION);
    conn = await mysql.createPool(CONFIG_CONN);
    next();
  } catch (error) {
    res.send(500).send(error + "CONNECTION ERROR");
  }
});

STORAGE_CONSULTORIAS.get("/id_usuario=:usu_id", async (req, res) => {
  const usu_id = req.params.usu_id;
  console.log(usu_id);
  try {
    const [rows, fields] = await conn.execute(
      /*sql*/ ` SELECT consultorio.*, usuario.usu_id, usuario.usu_nombre, cita.cit_fecha FROM usuario INNER JOIN cita ON cita.cit_datosUsuario = usuario.usu_id INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional INNER JOIN consultorio ON medico.med_consultorio = consultorio.cons_codigo WHERE usuario.usu_id = ?`,
      [usu_id]
    );
    res.send(rows);
  } catch (error) {
    res.status(500).json({ message: "ERROR TO GET DATA", error: error });
  }
});

export default STORAGE_CONSULTORIAS;
