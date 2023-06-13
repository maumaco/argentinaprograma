/*
Programación imperativa en JavaScript
Práctico N1: Variables y comandos básicos
Parte 1: Variables

2. ¿De qué manera representarías las variables del ejercicio anterior
   en un objeto, llamémosle persona?

   a. Define una variable de tipo objeto que lleve el nombre persona
      y que contenga las variables nombre, apellido y edad
      del ejercicio anterior con sus respectivos valores.
   b. Imprime por consola un mensaje que respete el siguiente formato:
      "Mi objeto persona es el siguiente: [persona]"

Observación: Deberás usar la función JSON.stringify para poder
imprimir por consola el objeto persona de una manera legible.
*/

// a.
let persona = {nombre: 'Mauricio', apellido: 'Margarit', edad: 44};

// b.
console.log('Mi objeto persona es el siguiente: ' + JSON.stringify(persona));