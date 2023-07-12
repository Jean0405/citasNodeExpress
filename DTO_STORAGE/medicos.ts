import { Expose, Type, Transform} from "class-transformer";

export class Medicos{
  @Expose({ name: "med_nroMatriculaProsional" })
  @Transform(({ value }) => { if (Math.floor(value) && typeof value == "number") return Math.floor(value) }, { toClassOnly: true })
  med_nroMatriculaProsional:number;
  
  @Expose({ name: "med_nombreCompleto" })
  @Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value)) return value; else throw { status: 400, message: `Error, el dato nombre no es valido` } })
  med_nombreCompleto:string;
}

