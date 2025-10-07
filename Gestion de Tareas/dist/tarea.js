"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearTarea = crearTarea;
exports.dificultadConEstrellas = dificultadConEstrellas;
function crearTarea(titulo, descripcion, estado, dificultad, vencimiento) {
    return {
        titulo,
        descripcion,
        estado,
        dificultad,
        vencimiento: vencimiento ? new Date(vencimiento) : null,
        creacion: new Date(),
        ultimaEdicion: new Date(),
    };
}
function dificultadConEstrellas(tarea) {
    return "⭐".repeat(tarea.dificultad);
}
