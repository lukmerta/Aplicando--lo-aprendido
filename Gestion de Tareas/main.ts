import promptSync from "prompt-sync";
import { mostrarMenu, verMisTareas, buscarTarea, agregarTarea } from "./funciones";

const prompt = promptSync({ sigint: true });

function main(): void {
  console.log("Hola Querido Usuario!!!");

  while (true) {
    mostrarMenu();
    const opcion = prompt("> ");

    switch (opcion) {
      case "1":
        verMisTareas();
        break;
      case "2":
        buscarTarea();
        break;
      case "3":
        agregarTarea();
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
