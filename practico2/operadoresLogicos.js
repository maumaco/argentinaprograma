/*
Programación imperativa en JavaScript
Práctico N2: Condicionales

3. Escribe un programa que solicite al usuario ingresar un número entero.
A continuación, evalúa las siguientes condiciones:
* Si el número es positivo y par, muestra por consola el mensaje:
"El numero es positivo y par";
* Si el número es positivo e impar, muestra por consola el mensaje:
"El numero es positivo e impar";
* Si el número es negativo, muestra por consola el mensaje:
"El numero es negativo";
* Si el número es cero, muestra por consola el mensaje:
"El numero es cero".

NOTA: utilizar los operadores lógicos.
*/

// Importamos la librería readline-sync
const readlineSync = require('readline-sync');

// 3
const numero = readlineSync.question('Por favor, ingresa un numero entero: ');

if (parseInt(numero) > 0 && parseInt(numero) % 2 === 0) {
  console.log('El numero es positivo y par');
}
else if (parseInt(numero) > 0 && parseInt(numero) % 2 !== 0) {
  console.log('El numero es positivo e impar');
}
else if (parseInt(numero) < 0) {
  console.log('El numero es negativo');
}
else {
  console.log('El numero es cero');
}