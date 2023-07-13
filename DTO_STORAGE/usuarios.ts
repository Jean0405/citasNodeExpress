import { Expose, Type, Transform} from "class-transformer";

export class Usuarios{
  @Expose({ name: "usu_id" })
  @Transform(({ value }) => { if (Math.floor(value) && typeof value == "number") return Math.floor(value) }, { toClassOnly: true })
  usu_id:number;
  
  @Expose({ name: "usu_nombre" })
  @Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value)) return value; else throw { status: 400, message: `Error, el dato primer nombre no es valido` } })
  usu_nombre:string;

  @Expose({ name: "usu_segdo_nombre_usuar" })
  @Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value)) return value; else throw { status: 400, message: `Error, el dato segundo nombre no es valido` } })
  usu_segdo_nombre_usuar:string;


  @Expose({ name: "usu_primer_apellido_usuar" })
  @Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value)) return value; else throw { status: 400, message: `Error, el dato primer apellido no es valido` } })
  usu_primer_apellido_usuar:string;

  @Expose({ name: "usu_segdo_apellido_usuar" })
  @Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value)) return value; else throw { status: 400, message: `Error, el dato segundo apellido no es valido` } })
  usu_segdo_apellido_usuar:string;

  @Expose({ name: "usu_telefono" })
  @Transform(({ value }) => { if (/^[\d]+$/.test(value)) return value; else throw { status: 400, message: `Error, el dato telefono no es valido` } })
  usu_telefono:string;

  @Expose({name:"usu_direccion"})
  @Transform(({value}) =>  {if(/^[\w]+$/g.test(value)) return value;
  else throw {status:400, message:"Error en los parametros de entradas"};}, {toClassOnly:true})
  usu_direccion:string;

  @Expose({name:"usu_email"})
  @Transform(({value}) =>  {if(/^[\w\s+#@.-]+$/g.test(value)) return value;
  else throw {status:400, message:"Error en los parametros de entradas"};}, {toClassOnly:true})
  usu_email:string;

  @Expose({name:"usu_tipodoc"})
  @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value);
  else throw {status:400, message: "Error, el dato de documento no es valido"};}, {toClassOnly: true})
  usu_tipodoc:number;

  @Expose({name:"usu_genero"})
  @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value);
  else throw {status:400, message: "Error, el dato de genero no es valido"};}, {toClassOnly: true})
  usu_genero:number;

  @Expose({name:"usu_acudiente"})
  @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value);
  else throw {status:400, message: "Error, el dato de acudiente no es valido"};}, {toClassOnly: true})
  usu_acudiente:number;

  constructor(usu_id:number,usu_nombre:string, usu_segdo_nombre_usuar:string, usu_primer_apellido_usuar:string, usu_segdo_apellido_usuar:string,usu_telefono:string,usu_direccion:string,usu_email:string, usu_tipodoc:number, usu_genero:number, usu_acudiente:number){
    this.usu_id = usu_id;
    this.usu_nombre = usu_nombre;
    this.usu_segdo_nombre_usuar = usu_segdo_nombre_usuar;
    this.usu_primer_apellido_usuar = usu_primer_apellido_usuar;
    this.usu_segdo_apellido_usuar = usu_segdo_apellido_usuar;
    this.usu_telefono = usu_telefono;
    this.usu_direccion = usu_direccion;
    this.usu_email = usu_email;
    this.usu_tipodoc = usu_tipodoc;
    this.usu_genero = usu_genero;
    this.usu_acudiente = usu_acudiente;
  }
}
