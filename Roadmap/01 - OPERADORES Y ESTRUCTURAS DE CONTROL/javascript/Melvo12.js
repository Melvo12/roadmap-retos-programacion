/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */

//Tipos de operadores de lenguajes

//Operadores aritmeticos

let suma = 5 + 3;       // 8
let resta = 10 - 4;     // 6
let multiplicacion = 6 * 2; // 12
let division = 10 / 2;  // 5
let modulo = 10 % 3;    // 1 (resto de la división)
let exponente = 2 ** 3; // 8 (2 elevado a la 3)


//Operadores de asignacion

let x = 10;    
x += 5;  // x = x + 5 -> 15
x -= 3;  // x = x - 3 -> 12
x *= 2;  // x = x * 2 -> 24
x /= 4;  // x = x / 4 -> 6
x %= 5;  // x = x % 5 -> 1
x **= 2; // x = x ** 2 -> 1

//Operadores de comparacion

console.log(5 == "5");  // true (compara solo el valor)
console.log(5 === "5"); // false (compara valor y tipo)
console.log(10 != 5);   // true
console.log(10 !== "10"); // true
console.log(5 > 3);     // true
console.log(5 < 3);     // false
console.log(5 >= 5);    // true
console.log(4 <= 6);    // true

//Operadores logicos

let a = true, b = false;

console.log(a && b); // false (AND: ambas deben ser true)
console.log(a || b); // true (OR: al menos una true)
console.log(!a);     // false (NOT: invierte el valor)

// Operadores de Incremento y Decremento (Aumentan o disminuyen valores en 1)

let num = 5;
num++;  // 6 (incremento)
num--;  // 5 (decremento)

console.log(num);


//Operador Ternario (Condición en una línea)

let edad = 18;
let esMayor = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad";
console.log(esMayor);

//Operadores de Tipo

console.log(typeof "Hola");  // "string"
console.log(typeof 42);      // "number"
console.log(typeof true);    // "boolean"
console.log(typeof {});      // "object"
console.log(typeof null);    // "object" (error histórico de JS)
console.log(typeof undefined); // "undefined"

class Persona {}
let persona = new Persona();
console.log(persona instanceof Persona); // true


/* Utilizando las operaciones con operadores que tú quieras, crea ejemplos
*   que representen todos los tipos de estructuras de control que existan
*   en tu lenguaje:
*   Condicionales, iterativas, excepciones...
*/

// if

if (condition) {
    // código a ejecutar si la condición es verdadera
}
// Ejemplo: 
if (score >= 60) {
    console.log("Passed the exam!");
} else {
    console.log("Failed the exam.");
}

// switch

switch (expresión) {
    case valor1:
      // Bloque de código si la expresión coincide con valor1
      break;
    case valor2:
      // Bloque de código si la expresión coincide con valor2
      break;
    // Puedes tener más casos aquí
    default:
      // Bloque de código si la expresión no coincide con ningún caso
  }



  // Ejemplo de switch 

  var diaDeLaSemana = "Lunes";

switch (diaDeLaSemana) {
  case "Lunes":
    console.log("Es el primer día de la semana");
    break;
  case "Miércoles":
  case "Viernes":
    console.log("Es un día de trabajo");
    break;
  default:
    console.log("Es un día de descanso");
}





/*

 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *

*/

const numeros = (Math.random()*10)

for (let i= 10; i <= 55; i++) {
  if (i % 2 === 0 && i !== 16 && i % 3 !== 0) {
      console.log(i);
      
  }
  
}





