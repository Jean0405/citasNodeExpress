console.clear();
import express from "express";
import dotenv from "dotenv";
import STORAGE_PACIENTES from "./ROUTERS/usuarios.js";

dotenv.config();
const CONFIG = JSON.parse(process.env.MY_CONFIG);
const APP = express();

//middleware
APP.use(express.json());

APP.use("/", STORAGE_PACIENTES);

APP.listen(CONFIG, () => {
  console.log(`http://${CONFIG.hostname}:${CONFIG.port}`);
});
