"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const funciones_1 = require("./funciones");
const prompt = (0, prompt_sync_1.default)({ sigint: true });
function main() {
    console.log("Hola Querido Usuario!!!");
    while (true) {
        (0, funciones_1.mostrarMenu)();
        const opcion = prompt("> ");
        switch (opcion) {
            case "1":
                (0, funciones_1.verMisTareas)();
                break;
            case "2":
                (0, funciones_1.buscarTarea)();
                break;
            case "3":
                (0, funciones_1.agregarTarea)();
                break;
            case "0":
                console.log("¡Hasta luego!");
                process.exit();
            default:
                console.log("❌ Opción inválida. Intente de nuevo.");
        }
    }
}
main();
