import { Expose, Type, Transform} from "class-transformer";

export class Medicos{
  @Expose({ name: "med_nroMatriculaProsional" })
  @Transform(({ value }) => { if (Math.floor(value) && typeof value == "number") return Math.floor(value) }, { toClassOnly: true })
  med_nroMatriculaProsional:number;
  
  @Expose({ name: "med_nombreCompleto" })
  @Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value)) return value; else throw { status: 400, message: `Error, el dato nombre no es valido` } })
  med_nombreCompleto:string;

  @Expose({ name: "med_consultorio" })
  @Transform(({ value }) => { if (Math.floor(value) && typeof value == "number") return Math.floor(value) }, { toClassOnly: true })
  med_consultorio:number;

  @Expose({ name: "med_especialidad" })
  @Transform(({ value }) => { if (Math.floor(value) && typeof value == "number") return Math.floor(value) }, { toClassOnly: true })
  med_especialidad:number;

  constructor(med_nroMatriculaProsional:number,med_nombreCompleto:string,med_consultorio:number, med_especialidad:number){
    this.med_nroMatriculaProsional = med_nroMatriculaProsional;
    this.med_nombreCompleto = med_nombreCompleto;
    this.med_consultorio = med_consultorio;
    this.med_especialidad = med_especialidad;
  }
}

