/*
Programación imperativa en JavaScript
Práctico N1: Variables y comandos básicos
Parte 2: Comandos básicos

3. Operadores aritméticos:

   a. Crea cuatro variables que contengan valores numéricos.
   b. Suma las dos primeras variables y guarda el resultado
      en otra variable.
   c. Resta la cuarta variable de la tercera y almacena el resultado
      en otra variable.
   d. Multiplica los resultados de los dos últimos pasos juntos,
      almacenando el resultado en una variable llamada resultadoFinal.
      El producto debe ser 44. Si no lo es, deberás ajustar
      algunos de los valores de entrada iniciales.
  e. Escribe un cálculo que verifique si resultadoFinal es un número par.
     Almacena el resultado en una variable llamada esPar.
  f. Imprime por consola un mensaje con el siguiente formato:
    "Mis variables iniciales fueron: [var1], [var2], [var3] y [var4]. La respuesta a verificar si el resultado final es par es: [esPar]"
*/

// a.
let num1 = 5;
let num2 = 6;
let num3 = 13;
let num4 = 9;

// b.
let suma = num1 + num2;
// c.
let diferencia = num3 - num4;
// d.
let resultadoFinal = suma * diferencia;
// e.
let esPar = resultadoFinal % 2 === 0;

// f.
console.log('Mis variables iniciales fueron: %i, %i, %i y %i. La respuesta a verificar si el resultado final es par es: ' + esPar, num1, num2, num3, num4);