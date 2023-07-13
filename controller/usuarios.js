var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from "class-transformer";
export class Usuarios {
    constructor(usu_id, usu_nombre, usu_segdo_nombre_usuar, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente) {
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
__decorate([
    Expose({ name: "usu_id" }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value); }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Usuarios.prototype, "usu_id", void 0);
__decorate([
    Expose({ name: "usu_nombre" }),
    Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `Error, el dato primer nombre no es valido` }; }),
    __metadata("design:type", String)
], Usuarios.prototype, "usu_nombre", void 0);
__decorate([
    Expose({ name: "usu_segdo_nombre_usuar" }),
    Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `Error, el dato segundo nombre no es valido` }; }),
    __metadata("design:type", String)
], Usuarios.prototype, "usu_segdo_nombre_usuar", void 0);
__decorate([
    Expose({ name: "usu_primer_apellido_usuar" }),
    Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `Error, el dato primer apellido no es valido` }; }),
    __metadata("design:type", String)
], Usuarios.prototype, "usu_primer_apellido_usuar", void 0);
__decorate([
    Expose({ name: "usu_segdo_apellido_usuar" }),
    Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `Error, el dato segundo apellido no es valido` }; }),
    __metadata("design:type", String)
], Usuarios.prototype, "usu_segdo_apellido_usuar", void 0);
__decorate([
    Expose({ name: "usu_telefono" }),
    Transform(({ value }) => { if (/^[\d]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `Error, el dato telefono no es valido` }; }),
    __metadata("design:type", String)
], Usuarios.prototype, "usu_telefono", void 0);
__decorate([
    Expose({ name: "usu_direccion" }),
    Transform(({ value }) => {
        if (/^[\w]+$/g.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros de entradas" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], Usuarios.prototype, "usu_direccion", void 0);
__decorate([
    Expose({ name: "usu_email" }),
    Transform(({ value }) => {
        if (/^[\w\s+#@.-]+$/g.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros de entradas" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], Usuarios.prototype, "usu_email", void 0);
__decorate([
    Expose({ name: "usu_tipodoc" }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Error, el dato de documento no es valido" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Usuarios.prototype, "usu_tipodoc", void 0);
__decorate([
    Expose({ name: "usu_genero" }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Error, el dato de genero no es valido" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Usuarios.prototype, "usu_genero", void 0);
__decorate([
    Expose({ name: "usu_acudiente" }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Error, el dato de acudiente no es valido" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Usuarios.prototype, "usu_acudiente", void 0);
