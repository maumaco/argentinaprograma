let jugador1 = {nombre: 'Marcos', posicion: 'arco', edad: 21};
let jugador2 = {nombre: 'Paula', posicion: 'defensa', edad: 24};
let jugador3 = {nombre: 'Fernando', posicion: 'mediocampo', edad: 18};
let jugador4 = {nombre: 'Guadalupe', posicion: 'mediocampo', edad: 19};
let jugador5 = {nombre: 'Jor', posicion: 'delantera', edad: 27};

let equipo1 = [jugador1, jugador2, jugador3, jugador4, jugador5];
let equipo2 = [jugador1, jugador2, jugador3, jugador4, jugador5];
let equipo3 = [jugador1, jugador2, jugador3, jugador4, jugador5];
let equipo4 = [jugador1, jugador2, jugador3, jugador4, jugador5];
let equipo5 = [jugador1, jugador2, jugador3, jugador4, jugador5];
let equipo6 = [jugador1, jugador2, jugador3, jugador4, jugador5];
let equipo7 = [jugador1, jugador2, jugador3, jugador4, jugador5];
let equipo8 = [jugador1, jugador2, jugador3, jugador4, jugador5];

let equipos = [equipo1, equipo2, equipo3, equipo4, equipo5, equipo6, equipo7, equipo8];

console.log('Objetos y arreglos: jugadores y equipos');
console.log('\n');
console.log('Jugador 1 (objeto):');
console.log(jugador1);
console.log('\n');
console.log('Equipo 2 (arreglo de objetos):');
console.log(equipo2);
console.log('\n');
console.log('Equipos del torneo (arreglo de arreglos de objetos):');
console.log('Nota: Aquí debería verse un arreglo compuesto a su vez por 8 arreglos (equipos) de 5 objetos (jugadores) cada uno. Cada equipo se vería como se imprimió el equipo 2 anteriormente. No se imprimen todos los equipos del torneo por cuestiones de espacio, ya que ocuparían decenas de líneas.');