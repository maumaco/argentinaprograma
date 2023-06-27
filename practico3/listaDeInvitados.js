/*
Programación imperativa en JavaScript
Práctico N3: ciclos

Lista de invitados
Toma una lista de nombres almacenados en un arreglo y colócalos en una lista de
invitados. No queremos dejar entrar a Jose y Sofia. Tenemos dos listas, una para
admitir invitados y otra para rechazar invitados.
La lista de personas es la siguiente: Jose, Maria, Juan, Andres, Lionel, Sofia,
Leandro y Emilia.

1. Escribe un bucle que itere desde 0 hasta la longitud del arreglo personas.
Deberá comenzar con un inicializador de let i = 0. ¿Qué condición de salida
necesita?
2. Durante cada iteración del ciclo, verifica si el elemento del arreglo actual
es igual a "Jose" o "Sofia" usando una declaración condicional:
   a. Si es así, agrega el elemento al arreglo de rechazados;
   b. Si no es así, agrega el elemento al arreglo de admitidos.
3. Escribe dos bucles más; uno para imprimir la lista de invitados admitidos
y otro para imprimir la lista de invitados rechazados:
   a. Para la lista de invitados admitidos deberás imprimir por consola un
   mensaje inicial que dirá "La lista de invitados admitidos es:", seguido por
   tantos párrafos como tenga el arreglo admitidos conteniendo los respectivos
   nombres de los invitados.
   b. Para la lista de invitados rechazados deberás imprimir por consola un
   mensaje inicial que dirá "La lista de invitados rechazados es:", seguido por
   tantos párrafos como tenga el arreglo rechazados conteniendo los respectivos
   nombres de los invitados.
4. EXTRA. Repite el inciso anterior, pero esta vez imprimiendo los nombres de
manera ordenada alfabéticamente. Deberás agregar la palabra "ordenada" posterior
a la palabra lista; es decir, para el caso de los admitidos deberás imprimir: 
"La lista ordenada de invitados admitidos es:".
*/

let personas = ['Jose', 'Maria', 'Juan', 'Andres', 'Lionel', 'Sofia', 'Leandro', 'Emilia'];
let rechazados = [];
let admitidos = [];

// 1
for (let i = 0; i < personas.length; i++) {
  // 2.a
  if (personas[i] === 'Jose' || personas[i] === 'Sofia') {
    rechazados.push(personas[i]);
  }
  // 2.b
  else {
    admitidos.push(personas[i]);
  }
}

// 3.a
console.log('La lista de invitados admitidos es:');
for (let i = 0; i < admitidos.length; i++) {
    console.log(admitidos[i]);
}

// 3.b
console.log('La lista de invitados rechazados es:');
for (let i = 0; i < rechazados.length; i++) {
    console.log(rechazados[i]);
}

// 4.a
console.log('La lista ordenada de invitados admitidos es:');
admitidos.sort();
for (let i = 0; i < admitidos.length; i++) {
    console.log(admitidos[i]);
}

// 4.b
console.log('La lista ordenada de invitados rechazados es:');
rechazados.sort();
for (let i = 0; i < rechazados.length; i++) {
    console.log(rechazados[i]);
}