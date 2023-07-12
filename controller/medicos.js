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
export class Medicos {
    constructor(med_nroMatriculaProsional, med_nombreCompleto, med_consultorio, med_especialidad) {
        this.med_nroMatriculaProsional = med_nroMatriculaProsional;
        this.med_nombreCompleto = med_nombreCompleto;
        this.med_consultorio = med_consultorio;
        this.med_especialidad = med_especialidad;
    }
}
__decorate([
    Expose({ name: "med_nroMatriculaProsional" }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value); }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Medicos.prototype, "med_nroMatriculaProsional", void 0);
__decorate([
    Expose({ name: "med_nombreCompleto" }),
    Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `Error, el dato nombre no es valido` }; }),
    __metadata("design:type", String)
], Medicos.prototype, "med_nombreCompleto", void 0);
__decorate([
    Expose({ name: "med_consultorio" }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value); }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Medicos.prototype, "med_consultorio", void 0);
__decorate([
    Expose({ name: "med_especialidad" }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value); }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Medicos.prototype, "med_especialidad", void 0);
