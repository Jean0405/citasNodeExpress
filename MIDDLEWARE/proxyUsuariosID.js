
import express from "express";
import { plainToClass } from "class-transformer";
import { UsuarioID } from "../controller/usuariosID.js";

const proxyUsuariosID = express();
proxyUsuariosID.use((req, res, next) => {
  try {
    let data = plainToClass(UsuarioID, req.params, {
      excludeExtraneousValues: true,
    });
    req.params = data;
    next();
  } catch (error) {
    res.status(error.status).send(error);
  }
});

export default proxyUsuariosID;
