//Ejercicio 1
//Considera el lenguaje TypeScript acotado al paradigma de programación estructurada y analízalo en términos de los cuatro componentes de un paradigma mencionados por Kuhn.
//Generalización simbólica: ¿Cuáles son las reglas escritas del lenguaje?
//Generalización simbólica (reglas escritas del lenguaje)
//Son las reglas formales y normativas que determinan cómo se escribe y ejecuta un programa en TypeScript cuando lo usamos de forma estructurada:
//Sintaxis heredada de JavaScript: estructuras de control (if, else, switch, while, for, funciones) que permiten expresar algoritmos paso a paso.

//Tipado estático opcional: declaración de tipos para variables, parámetros y funciones (number, string, boolean, any, void, unknown, etc.).

//Inferencia de tipos: el compilador deduce el tipo cuando no se especifica explícitamente.

//Chequeo en tiempo de compilación: errores de tipo y estructura se detectan antes de ejecutar el código.

//Transpilación obligatoria: el código TypeScript no se ejecuta directamente; debe transformarse en JavaScript válido.

//Modularización: uso de import y export para organizar el código en unidades reutilizables.

//Restricciones estructuradas: al analizarlo solo desde el paradigma estructurado, el uso de clases, interfaces y genéricos se interpreta como mecanismos para asegurar consistencia en la definición y paso de datos, sin caer en objetos como “primera clase” sino en estructuras bien definidas.

//En resumen: las reglas de escritura y validación garantizan que el código sea determinista, verificable y mantenible, reforzando la disciplina del paradigma estructurado.

//2.Creencias de los profesionales: ¿Qué características particulares del lenguaje se cree que sean "mejores" que en otros lenguajes?
//Creencias de los profesionales (qué se cree que hace mejor que otros lenguajes)
//La comunidad y los profesionales que usan TypeScript tienden a compartir ciertas convicciones:
//Mayor seguridad que JavaScript: se cree que el tipado estático previene muchos errores comunes en tiempo de ejecución.

//Productividad sin sacrificar flexibilidad: gracias a la inferencia de tipos, se obtiene seguridad de tipos sin escribir código excesivamente verboso.

//Mejor soporte en IDEs: autocompletado, navegación y refactorización son más sólidos que en JavaScript puro.

//Ecosistema compatible: no rompe con el mundo JavaScript; cualquier código JS es TS válido (en modo permisivo).

//Mantenibilidad en proyectos grandes: los tipos explícitos y el chequeo estático facilitan la colaboración entre equipos y reducen la deuda técnica.

//Escalabilidad: se percibe que TypeScript permite escalar aplicaciones más grandes que las que se suelen manejar en JavaScript puro, gracias a la modularización y tipado.

//Aprendizaje accesible: muchos creen que aprender TypeScript es natural para quien ya sabe JavaScript, lo que lo hace más “amigable” que otros lenguajes fuertemente tipados como Java o C#.

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
