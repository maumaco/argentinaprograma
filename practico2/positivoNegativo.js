/*
Programación imperativa en JavaScript
Práctico N2: Condicionales

1.b. Escribe un programa que solicite al usuario ingresar un número. Si el número
es positivo, muestra por consola el mensaje: "El numero es positivo". Si el número
es igual a cero, muestra por consola el mensaje: "El numero es cero". Si el número
es negativo, muestra por consola el mensaje: "El numero es negativo".
*/

// Importamos la librería readline-sync
const readlineSync = require('readline-sync');

// 1.b
const numero = readlineSync.question('Por favor, ingresa un numero: ');

if (parseFloat(numero) > 0) {
  console.log('El numero es positivo');
}
else if (parseFloat(numero) === 0) {
  console.log('El numero es cero');
}
else {
  console.log('El numero es negativo');
}