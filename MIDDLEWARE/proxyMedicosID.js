import express from "express";
import { plainToClass } from "class-transformer";
import { Medicos } from "../controller/medicosID.js";

const proxyMedicosID = express();

proxyMedicosID.use((req, res, next) => {
  try {
    req.params = plainToClass(Medicos, req.params, {
      excludeExtraneousValues: true,
    });
    next();
  } catch (error) {
    res.status(error.status).send(error);
  }
});

export default proxyMedicosID;
