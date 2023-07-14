import { Expose, Type, Transform} from "class-transformer";

export class UsuarioID {
  @Expose({ name: "usu_id" })
  @Transform(({ value }) => { if (Math.floor(value) && typeof value == "number") return Math.floor(value) }, { toClassOnly: true })
  usu_id:number;
  constructor(usu_id:number){
    this.usu_id = usu_id;
  }
}