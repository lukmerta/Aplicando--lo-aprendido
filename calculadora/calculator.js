//Parte A – JavaScript en el paradigma estructurado

//Según Kuhn, un paradigma se puede analizar con 4 componentes:

//Generalización simbólica (reglas escritas del lenguaje)

//Sintaxis basada en C (uso de llaves {}, punto y coma ;, estructuras de control clásicas).

//Estructuras de control propias de la programación estructurada: if, switch, for, while, do...while.

//Declaración de variables (var, let, const) y funciones (function).

//Alcance léxico de variables y reglas de bloques.

//Uso de expresiones y operadores aritméticos, lógicos y relacionales.

//Manejo de entrada/salida y errores (console.log, try/catch).

//En resumen: las reglas formales de sintaxis y semántica que definen cómo se escribe y ejecuta el código.

//Creencias de los profesionales

//JavaScript es considerado ligero y flexible frente a otros lenguajes.

//Se cree que es rápido de aprender y accesible para principiantes.

//Tiene la ventaja de estar disponible en cualquier navegador, lo que le da universalidad.

//Se valora su dinamismo (tipado dinámico, funciones de primera clase).

//La comunidad cree que es mejor que otros lenguajes para aplicaciones web interactivas.

//Parte B – Evaluación de JavaScript (estructurado) con los ejes de selección

//¿Tiene sintaxis y semántica bien definida? ¿Existe documentación oficial?
//Sí. JavaScript está estandarizado por ECMAScript (ECMA-262), con sintaxis y semántica precisas. Existe documentación oficial en ECMA
// y recursos oficiales como MDN


//¿Es posible comprobar el código producido?
//Sí, se puede ejecutar directamente en navegadores o entornos como Node.js, comprobando su funcionamiento.
//No es compilado de manera estricta, pero sí es interpretable y validable.

//¿Es confiable?
//Sí, siempre que se sigan buenas prácticas (validación de entradas, manejo de errores). Es confiable para aplicaciones web y de servidor, aunque el tipado dinámico puede generar errores en tiempo de ejecución.

//¿Es ortogonal?
//Parcialmente. Muchas combinaciones de estructuras y expresiones funcionan de manera coherente, pero existen inconsistencias (ejemplo: coerción de tipos automáticos como [] + {} o == vs ===).

//Consistencia y uniformidad

//Consistencia: razonable, aunque arrastra "quirks" por compatibilidad con versiones antiguas.

//Uniformidad: moderna (con ES6 en adelante) ha mejorado, unificando estilos y agregando let, const, arrow functions, etc.

//¿Es extensible? ¿Existen subconjuntos?
//Sí. Puede extenderse mediante librerías y frameworks.
//Además, existen subconjuntos como TypeScript (superset tipado) o subset seguro para navegadores antiguos (ES5).

//¿El código producido es transportable?
//Sí. Un programa en JavaScript puede correr en cualquier navegador o en Node.js, independientemente del sistema operativo.
//Es uno de los lenguajes más portables hoy en día.

const readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

// Solicita el operador
rl.question('Introduce el operador (+, -, *, /): ', function(operador) {
  rl.question('¿Cuántos números quieres operar?: ', function(cantidad) {
    var total = parseInt(cantidad);
    var numeros = [];
    var contador = 0;

    function pedirNumero() {
      if (contador < total) {
        rl.question('Introduce el número ' + (contador + 1) + ': ', function(valor) {
          numeros.push(parseFloat(valor));
          contador++;
          pedirNumero();
        });
      } else {
        var resultado = numeros[0];
        for (var i = 1; i < numeros.length; i++) {
          if (operador === '+') {
            resultado += numeros[i];
          } else if (operador === '-') {
            resultado -= numeros[i];
          } else if (operador === '*') {
            resultado *= numeros[i];
          } else if (operador === '/') {
            if (numeros[i] === 0) {
              console.log('Error: No se puede dividir por cero.');
              rl.close();
              return;
            }
            resultado /= numeros[i];
          } else {
            console.log('Operador no válido.');
            rl.close();
            return;
          }
        }
        console.log('El resultado es: ' + resultado);
        rl.close();
      }
    }

    pedirNumero();
  });
})