/*
Programación imperativa en JavaScript
Práctico N2: Condicionales

1.a. Escribe un programa que solicite al usuario ingresar su edad. Si la edad
es mayor o igual a 18, muestra por consola el mensaje: "Eres mayor de edad".
De lo contrario, muestra por consola el mensaje: "Eres menor de edad".
*/

// Importamos la librería readline-sync
const readlineSync = require('readline-sync');

// 1.a
const edad = readlineSync.question('Por favor, ingresa tu edad: ');

if (parseInt(edad) >= 18) {
  console.log('Eres mayor de edad');
}
else {
  console.log('Eres menor de edad');
}