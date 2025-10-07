const prompt = require("prompt-sync")({ sigint: true });
const {
  mostrarMenu,
  verMisTareas,
  buscarTarea,
  agregarTarea
} = require("./funciones");

function main() {
  console.log("Hola Querido Usario!!!");

  while (true) {
    mostrarMenu();
    const opcion = prompt("> ");

    switch (opcion) {
      case "1": verMisTareas(); break;
      case "2": buscarTarea(); break;
      case "3": agregarTarea(); break;
      case "0":
        console.log("¡Hasta luego!");
        process.exit();
      default:
        console.log("❌ Opción inválida. Intente de nuevo.");
    }
  }
}

main();