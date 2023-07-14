import { Expose, Transform} from "class-transformer";

export class Medicos{
  @Expose({ name: "med_nroMatriculaProsional" })
  @Transform(({ value }) => { if (Math.floor(value) && typeof value == "number") return Math.floor(value) }, { toClassOnly: true })
  med_nroMatriculaProsional:number;

  constructor(med_nroMatriculaProsional:number){
    this.med_nroMatriculaProsional = med_nroMatriculaProsional;
  }
}