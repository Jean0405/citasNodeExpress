console.clear();
import express from "express";
import dotenv from "dotenv";
import STORAGE_PACIENTES from "./ROUTERS/usuarios.js";
import STORAGE_CITAS from "./ROUTERS/citas.js";

dotenv.config();

const APP = express();

//middleware
APP.use(express.json());

APP.use("/pacientes", STORAGE_PACIENTES);
APP.use("/citas", STORAGE_CITAS);

const CONFIG = JSON.parse(process.env.MY_CONFIG);

APP.listen(CONFIG, () => {
  console.log(`http://${CONFIG.hostname}:${CONFIG.port}`);
});
