/*
Programación imperativa en JavaScript
Práctico N1: Variables y comandos básicos
Parte 1: Variables

1. Escribir un programa que:

   a. Defina una variable nombre.
   b. Guarde en la variable nombre tu nombre real.
   c. Defina y asigne, en un mismo paso, la variable apellido.
      El valor a asignar deberá ser tu apellido real.
   d. Repita el paso anterior, pero esta vez definiendo
      la variable edad y asignándole tu edad real.
   e. Por último, imprima por consola un mensaje que respete
      el siguiente formato:
      "Hola, [nombre] [apellido]. Tienes [edad] años."
*/

// a.
let nombre;
// b.
nombre = 'Mauricio';
// c.
let apellido = 'Margarit';
// d.
let edad = 44;

// e.
console.log('Hola, %s %s. Tienes %i años.', nombre, apellido, edad);