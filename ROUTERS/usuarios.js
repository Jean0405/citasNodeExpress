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

STORAGE_PACIENTES.get("/pacientes", async (req, res) => {
  try {
    const [rows, fields] = await conn.execute(/*sql*/ `SELECT * FROM usuario`);
    res.send(rows);
  } catch (error) {
    res.status(500).json({ message: "ERROR TO GET DATA", error: error });
  }
});

export default STORAGE_PACIENTES;
