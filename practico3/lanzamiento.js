/*
Programación imperativa en JavaScript
Práctico N3: ciclos

Cuenta regresiva
Imprime una cuenta regresiva de lanzamiento de un cohete a Marte. Dicha cuenta
irá desde 10 hasta el despegue.

1. Crea un bucle de 10 a 0. Ayuda: inicializador: let i = 10.
2. Por cada iteración imprime por consola usando console.log.
3. Diferentes números de iteración requieren que se coloque un texto diferente
en el párrafo para esa iteración (necesitarás una declaración condicional):
   a. Si el número es 10, imprime "Cuenta regresiva 10" en el párrafo;
   b. Si el número es 0, imprime "Lanzamiento!" en el párrafo;
   c. Para cualquier otro número, imprime solo el número en el párrafo.
4. ¡Recuerda incluir un iterador! Sin embargo, en este ejemplo estamos contando
hacia atrás después de cada iteración, no hacia arriba, por lo que **no** se
requiere i++ — ¿cómo se itera hacia abajo?
*/

// 1, 4
for (let i = 10; i > -1; i--) {
  // 2, 3.a
  if (i === 10) {
    console.log('Cuenta regresiva 10');
  }
  // 2, 3.b
  else if (i === 0) {
    console.log('Lanzamiento!');
  }
  // 2, 3.c
  else {
    console.log(i.toString());
  }
}