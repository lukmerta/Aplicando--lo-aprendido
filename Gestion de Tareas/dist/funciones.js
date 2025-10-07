"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tareas = void 0;
exports.mostrarMenu = mostrarMenu;
exports.verMisTareas = verMisTareas;
exports.buscarTarea = buscarTarea;
exports.agregarTarea = agregarTarea;
const tarea_1 = require("./tarea");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)({ sigint: true });
// ====== Datos en memoria ======
exports.tareas = [];
// ====== Menú principal ======
function mostrarMenu() {
    console.log("\n¿Qué deseas hacer?");
    console.log("[1] Ver Mis Tareas.");
    console.log("[2] Buscar una Tarea.");
    console.log("[3] Agregar una Tarea.");
    console.log("[0] Salir.");
}
// ====== Ver tareas ======
function verMisTareas() {
    while (true) {
        console.log("\n¿Qué tareas deseas ver?");
        console.log("[1] Todas");
        console.log("[2] Pendientes");
        console.log("[3] En curso");
        console.log("[4] Terminadas");
        console.log("[0] Volver");
        const opcion = prompt("> ");
        let filtradas = [];
        switch (opcion) {
            case "1":
                filtradas = exports.tareas;
                break;
            case "2":
                filtradas = exports.tareas.filter((t) => t.estado === "Pendiente");
                break;
            case "3":
                filtradas = exports.tareas.filter((t) => t.estado === "En curso");
                break;
            case "4":
                filtradas = exports.tareas.filter((t) => t.estado === "Terminada");
                break;
            case "0":
                return;
            default:
                console.log("❌ Opción inválida.");
                continue;
        }
        if (filtradas.length === 0) {
            console.log("No hay tareas para mostrar.");
            continue;
        }
        console.log("\nEstas son tus tareas:");
        filtradas.forEach((t, i) => console.log(`[${i + 1}] ${t.titulo} [${t.estado}] (${(0, tarea_1.dificultadConEstrellas)(t)})`));
        const verDetalle = prompt("\n¿Deseas ver los detalles de alguna? Introduce el número o 0 para volver: ");
        if (verDetalle === "0")
            continue;
        const idx = parseInt(verDetalle) - 1;
        if (idx < 0 || idx >= filtradas.length) {
            console.log("Número inválido.");
            continue;
        }
        mostrarDetalleTarea(filtradas[idx]);
    }
}
// ====== Buscar tarea ======
function buscarTarea() {
    const buscar = prompt("Introduce el título de una tarea para buscarla: ").toLowerCase();
    const resultado = exports.tareas.filter((t) => t.titulo.toLowerCase().includes(buscar));
    if (resultado.length === 0) {
        console.log("No hay tareas relacionadas con la búsqueda.");
        prompt("Presiona cualquier tecla para continuar...");
        return;
    }
    console.log("\nEstas son las tareas relacionadas:");
    resultado.forEach((t, i) => console.log(`[${i + 1}] ${t.titulo}`));
    const opcion = prompt("Introduce el número para verla o 0 para volver: ");
    if (opcion === "0")
        return;
    const idx = parseInt(opcion) - 1;
    if (idx >= 0 && idx < resultado.length) {
        mostrarDetalleTarea(resultado[idx]);
    }
}
// ====== Agregar tarea ======
function agregarTarea() {
    console.log("\nEstas creando una nueva tarea.");
    const titulo = prompt("1. Ingrese el Título: ");
    const descripcion = prompt("2. Ingrese la descripción: ");
    const estadoInput = prompt("3. Estado ([P]endiente / [E]n curso / [T]erminada / [C]ancelada): ").toUpperCase();
    let estado = "Pendiente";
    if (estadoInput === "E")
        estado = "En curso";
    if (estadoInput === "T")
        estado = "Terminada";
    if (estadoInput === "C")
        estado = "Cancelada";
    const dificultad = parseInt(prompt("4. Dificultad (1/2/3): ") || "1");
    const vencimiento = prompt("5. Vencimiento (AAAA-MM-DD): ");
    const nueva = (0, tarea_1.crearTarea)(titulo, descripcion, estado, dificultad, vencimiento);
    exports.tareas.push(nueva);
    console.log("\n✅ ¡Datos guardados!");
    prompt("Presiona cualquier tecla para continuar...");
}
// ====== Mostrar detalles de tarea ======
function mostrarDetalleTarea(tarea) {
    console.log("\nEsta es la tarea que elegiste:");
    console.log(`Título: ${tarea.titulo}`);
    console.log(`Descripción: ${tarea.descripcion || "(sin descripción)"}`);
    console.log(`Estado: ${tarea.estado}`);
    console.log(`Dificultad: ${(0, tarea_1.dificultadConEstrellas)(tarea)}`);
    console.log(`Vencimiento: ${tarea.vencimiento ? tarea.vencimiento.toLocaleDateString() : "(no tiene)"}`);
    console.log(`Creación: ${tarea.creacion.toLocaleDateString()}`);
    const opcion = prompt("\nSi deseas editarla, presiona E, o 0 para volver: ").toUpperCase();
    if (opcion === "E")
        editarTarea(tarea);
}
// ====== Editar tarea ======
function editarTarea(tarea) {
    console.log(`\nEstas editando la tarea ${tarea.titulo}`);
    console.log("- Si deseas mantener un valor, déjalo en blanco.");
    console.log("- Si deseas borrar un atributo, escribe un espacio.");
    const nuevoTitulo = prompt(`1. Título (${tarea.titulo}): `);
}
