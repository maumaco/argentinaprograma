/*
Programación imperativa en JavaScript
Práctico N1: variables y comandos básicos
Parte 2: Comandos básicos

4. Manejo de strings:
   En esta tarea se te proporcionan dos variables, cita y substring,
   que contienen dos cadenas. Nos gustaría que:

   a. Recuperes la longitud de la cita y la guardes en una variable
      llamada tamañoDeCita. Deberás imprimir por consola un mensaje
      con el siguiente formato:
      "El tamaño de la cita es: [tamañoCita]"
   b. Busques la posición del índice donde aparece substring en cita
      y almacenes ese valor en una variable llamada indice. Deberás
      imprimir por consola un mensaje con el siguiente formato:
      "El indice del substring es: [indice]"
   c. Uses una combinación de las variables que tienes y las
      propiedades/métodos de cadena disponibles para recortar
      la cita original a "Tres tristes tigres comen trigo"
      y la guardes en una variable llamada citaRevisada.
      Por último, para verificar que el valor de citaRevisada
      es correcto, deberás imprimirla por consola.

Los valores iniciales de cita y substring son los siguientes:
   cita = "Tres tristes tigres comen trigo en un trigal"
   substring = "tigres comen trigo"
*/

let cita = 'Tres tristes tigres comen trigo en un trigal';
let substring = 'tigres comen trigo';

// a.
let tamañoDeCita = cita.length;
console.log('El tamaño de la cita es: %i', tamañoDeCita);

// b.
let indice = cita.indexOf(substring);
console.log('El indice del substring es: %i', indice);

// c.
let citaRevisada = cita.slice(0, indice + substring.length);
console.log(citaRevisada);