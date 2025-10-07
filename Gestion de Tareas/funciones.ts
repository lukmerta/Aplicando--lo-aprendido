import { Tarea, crearTarea, dificultadConEstrellas } from "./tarea";
import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

// ====== Datos en memoria ======
export let tareas: Tarea[] = [];

// ====== Menú principal ======
export function mostrarMenu(): void {
  console.log("\n¿Qué deseas hacer?");
  console.log("[1] Ver Mis Tareas.");
  console.log("[2] Buscar una Tarea.");
  console.log("[3] Agregar una Tarea.");
  console.log("[0] Salir.");
}

// ====== Ver tareas ======
export function verMisTareas(): void {
  while (true) {
    console.log("\n¿Qué tareas deseas ver?");
    console.log("[1] Todas");
    console.log("[2] Pendientes");
    console.log("[3] En curso");
    console.log("[4] Terminadas");
    console.log("[0] Volver");

    const opcion = prompt("> ");
    let filtradas: Tarea[] = [];

    switch (opcion) {
      case "1":
        filtradas = tareas;
        break;
      case "2":
        filtradas = tareas.filter((t) => t.estado === "Pendiente");
        break;
      case "3":
        filtradas = tareas.filter((t) => t.estado === "En curso");
        break;
      case "4":
        filtradas = tareas.filter((t) => t.estado === "Terminada");
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
    filtradas.forEach((t, i) =>
      console.log(`[${i + 1}] ${t.titulo} [${t.estado}] (${dificultadConEstrellas(t)})`)
    );

    const verDetalle = prompt("\n¿Deseas ver los detalles de alguna? Introduce el número o 0 para volver: ");
    if (verDetalle === "0") continue;

    const idx = parseInt(verDetalle) - 1;
    if (idx < 0 || idx >= filtradas.length) {
      console.log("Número inválido.");
      continue;
    }

    mostrarDetalleTarea(filtradas[idx]);
  }
}

// ====== Buscar tarea ======
export function buscarTarea(): void {
  const buscar = prompt("Introduce el título de una tarea para buscarla: ").toLowerCase();
  const resultado = tareas.filter((t) => t.titulo.toLowerCase().includes(buscar));

  if (resultado.length === 0) {
    console.log("No hay tareas relacionadas con la búsqueda.");
    prompt("Presiona cualquier tecla para continuar...");
    return;
  }

  console.log("\nEstas son las tareas relacionadas:");
  resultado.forEach((t, i) => console.log(`[${i + 1}] ${t.titulo}`));

  const opcion = prompt("Introduce el número para verla o 0 para volver: ");
  if (opcion === "0") return;

  const idx = parseInt(opcion) - 1;
  if (idx >= 0 && idx < resultado.length) {
    mostrarDetalleTarea(resultado[idx]);
  }
}

// ====== Agregar tarea ======
export function agregarTarea(): void {
  console.log("\nEstas creando una nueva tarea.");
  const titulo = prompt("1. Ingrese el Título: ");
  const descripcion = prompt("2. Ingrese la descripción: ");
  const estadoInput = prompt("3. Estado ([P]endiente / [E]n curso / [T]erminada / [C]ancelada): ").toUpperCase();

  let estado: "Pendiente" | "En curso" | "Terminada" | "Cancelada" = "Pendiente";
  if (estadoInput === "E") estado = "En curso";
  if (estadoInput === "T") estado = "Terminada";
  if (estadoInput === "C") estado = "Cancelada";

  const dificultad = parseInt(prompt("4. Dificultad (1/2/3): ") || "1");
  const vencimiento = prompt("5. Vencimiento (AAAA-MM-DD): ");

  const nueva = crearTarea(titulo, descripcion, estado, dificultad, vencimiento);
  tareas.push(nueva);

  console.log("\n✅ ¡Datos guardados!");
  prompt("Presiona cualquier tecla para continuar...");
}

// ====== Mostrar detalles de tarea ======
function mostrarDetalleTarea(tarea: Tarea): void {
  console.log("\nEsta es la tarea que elegiste:");
  console.log(`Título: ${tarea.titulo}`);
  console.log(`Descripción: ${tarea.descripcion || "(sin descripción)"}`);
  console.log(`Estado: ${tarea.estado}`);
  console.log(`Dificultad: ${dificultadConEstrellas(tarea)}`);
  console.log(`Vencimiento: ${tarea.vencimiento ? tarea.vencimiento.toLocaleDateString() : "(no tiene)"}`);
  console.log(`Creación: ${tarea.creacion.toLocaleDateString()}`);

  const opcion = prompt("\nSi deseas editarla, presiona E, o 0 para volver: ").toUpperCase();
  if (opcion === "E") editarTarea(tarea);
}

// ====== Editar tarea ======
function editarTarea(tarea: Tarea): void {
  console.log(`\nEstas editando la tarea ${tarea.titulo}`);
  console.log("- Si deseas mantener un valor, déjalo en blanco.");
  console.log("- Si deseas borrar un atributo, escribe un espacio.");

  const nuevoTitulo = prompt(`1. Título (${tarea.titulo}): `);
}
