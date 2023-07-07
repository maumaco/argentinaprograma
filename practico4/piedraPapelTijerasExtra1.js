/*

Programación imperativa en JavaScript
Práctico N4: Funciones

PIEDRA, PAPEL O TIJERAS (EXTRA 1)

El objetivo de este práctico es desarrollar un programa sencillo en JavaScript
que permita jugar al juego "Piedra, papel o tijeras" contra la computadora.
El programa permitirá al usuario jugar contra la computadora. La computadora
elegirá una opción de forma aleatoria y el usuario podrá ingresar su elección
a través de la consola. El programa determinará el ganador y mostrará el
resultado por pantalla.

1. Crea un nuevo archivo JavaScript con el nombre piedraPapelTijeras.js.

2. Crea una función llamada obtenerJugadaComputadora que generará un número
aleatorio entre 0 y 2 para representar las opciones:
   * 0 para "piedra",
   * 1 para "papel" y
   * 2 para "tijeras".
Siempre utilizando los valores de strings y no los valores númericos.
Ayuda1: Utilizar alguna estructura de datos para almacenar la relación entre
los valores numéricos y los strings "piedra", "papel" y "tijeras".
Ayuda2: revisar en el teórico cuál es la función de la librería Math que genera
un número random.

3. Crea una función llamada obtenerJugadaUsuario que solicitará al usuario
ingresar su elección a través de la consola. Los valores posibles son:
"piedra", "papel" o "tijeras".

4. Crea una función llamada determinarGanador que tomará como parámetros las jugadas
de la computadora y del usuario. Implementa las reglas del juego para determinar el
ganador y retorna el resultado.

5. Llama a las funciones en el orden adecuado para ejecutar el juego:
   a) Invoca la función obtenerJugadaComputadora y almacena el resultado en una variable.
   b) Invoca la función obtenerJugadaUsuario y almacena el resultado en otra variable.
   c) Invoca la función determinarGanador pasando como argumentos las jugadas de
   la computadora y del usuario. Almacena el resultado en una variable.
   
6. Imprime por pantalla el resultado del juego utilizando la función console.log().
El mensaje debe indicar la jugada de la computadora, la jugada del usuario y el
resultado del juego (quién ganó o si fue un empate). Se debe respetar el siguiente
formato dependiendo del resultado:
   La computadora eligio: [jugadaComputador]. El usuario eligio: [jugadaUsuario].
   El resultado fue: [Empate | Gana la computadora | Gana el usuario].
NOTA: no es necesario imprimir todo el mensaje en una sola línea, se puede imprimir
en tres párrafos.

EXTRA 1
Definir constantes para las distintas jugadas, es decir, "piedra", "papel" y "tijeras",
y adaptar el código para su correcta utilización.

*/



// LIBRERÍAS //

// readlineSync
const readlineSync = require('readline-sync');



// GLOBALES //

// Jugadas válidas
const PIEDRA = 'piedra';
const PAPEL = 'papel';
const TIJERAS = 'tijeras';

// Resultados
const GANA_COMPUTADORA = 'Gana la computadora';
const GANA_USUARIO = 'Gana el usuario';
const EMPATE = 'Empate';



// FUNCIONES //

/*
ejecutarPartida()
  imprimirInstrucciones()
  ejecutarJugada()
      obtenerJugadaUsuario()
      obtenerJugadaComputadora()
      determinarGanador(jugadaComputadora, jugadaUsuario)
      imprimirResultadoJugada(jugadaComputadora, jugadaUsuario, resultado)
*/

function ejecutarPartida() {
  // Ejecuta una partida completa del juego
  // Es la función principal del programa
  // Al terminar la partida, permite jugar una partida nueva o finalizar el programa
  // Tipo de dato de retorno: undefined

  // Iniciamos la partida
  console.log('¡PIEDRA, PAPEL, TIJERAS!');

  // Imprimimos las instrucciones del juego
  imprimirInstrucciones();

  // Ejecutamos la jugada
  ejecutarJugada();

  // Finalizamos la partida
  console.log('\nPARTIDA FINALIZADA');

  // Permitimos al usuario intentar nuevamente o finalizar la partida
  // El usuario solo puede presionar las teclas [j] o [f]
  // Si presiona [j]:
  // * retorna true
  // * se limpia la consola
  // * se ejecuta una nueva partida
  // Si presiona [f]
  // * retorna false
  // * se finaliza el programa
  let jugarNuevaPartida = readlineSync.keyIn('\nPresiona [j] para jugar una nueva partida o [f] para finalizar el programa: ', {limit: 'jf', trueValue: 'j', falseValue: 'f'});

  if (jugarNuevaPartida) {
    console.clear();
    ejecutarPartida();
  }
  else {
    console.log('\nPROGRAMA FINALIZADO');
  }
}

function imprimirInstrucciones() {
  // Imprime las instrucciones del juego
  // Tipo de dato de retorno: undefined

  console.log('\n* La partida consiste en una sola jugada');
  console.log('* Las jugadas validas son "%s", "%s" o "%s"', PIEDRA, PAPEL, TIJERAS);
  console.log('* En caso de empate, la jugada se repite hasta que haya un ganador');
}

function ejecutarJugada() {
  // Ejecuta una jugada completa de la partida
  // Obtiene y valida las jugadas del usuario y la computadora
  // Determina e imprime el resultado de la jugada entre el usuario y la computadora
  // Si la jugada del usuario está definida (jugada válida):
  // * obtiene la jugada de la computadora
  // * determina el resultado entre la jugada del usuario y la computadora
  // * imprime el detalle de la jugada
  // * si el resultado es igual a [EMPATE]:
  // * * ejecuta una nueva jugada
  // Tipo de dato de retorno: undefined

  let jugadaUsuario = obtenerJugadaUsuario();

  if (jugadaUsuario !== undefined) {

    let jugadaComputadora = obtenerJugadaComputadora();

    let resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

    imprimirResultadoJugada(jugadaComputadora, jugadaUsuario, resultado);

    if (resultado === EMPATE) {
      ejecutarJugada();
    }
  }
}

function obtenerJugadaUsuario() {
  // Obtiene y valida la jugada del usuario a partir de un valor ingresado por consola
  // Para ser válido, el valor debe ser una jugada válida
  // Si el valor no es válido:
  // * se imprime un mensaje de aviso
  // * se fuerza al usuario a intentar nuevamente o finalizar la partida
  // Tipo de dato de retorno (jugada válida): string
  // Tipo de dato de retorno (no intentar nuevamente): undefined
  // Valor de retorno (jugada válida): [PIEDRA], [PAPEL] o [TIJERAS]

  let jugada = readlineSync.question('\nIngresa tu jugada y presiona [Enter]: ').toLowerCase();

  if (jugada !== PIEDRA && jugada !== PAPEL && jugada !== TIJERAS) {

    console.log('\nLas jugadas validas son "%s", "%s" o "%s"', PIEDRA, PAPEL, TIJERAS);

    // El usuario sólo puede presionar las teclas [i] o [f]
    // Si presiona [i], retorna true. Si presiona [f], retorna false
    let intentarNuevamente = readlineSync.keyIn('Presiona [i] para intententar nuevamente o [f] para finalizar la partida: ', {limit: 'if', trueValue: 'i', falseValue: 'f'});

    if (intentarNuevamente) {
      jugada = obtenerJugadaUsuario();
    }
    else {
      return;
    }
  }

  return jugada;
}

function obtenerJugadaComputadora() {
  // Obtiene la jugada de la computadora en función de un número entero generado aleatoriamente
  // El número determina el elemento del arreglo de jugadas válidas que será devuelto
  // Tipo de dato de retorno: string
  // Valor de retorno: [PIEDRA], [PAPEL] o [TIJERAS]

  let jugadas = [PIEDRA, PAPEL, TIJERAS];

  return jugadas[Math.floor(Math.random() * 3)];
}

function determinarGanador(jugadaComputadora, jugadaUsuario) {
  // Determina el resultado de la jugada entre la computadora y el usuario
  // Tipo de dato de los parámetros: string
  // Valor que recibe: [PIEDRA], [PAPEL] o [TIJERAS]
  // Tipo de dato de retorno: string
  // Valor de retorno: [GANA_COMPUTADORA], [GANA_USUARIO] o [EMPATE]

  let resultado;

  if (jugadaComputadora !== jugadaUsuario) {
    if (jugadaComputadora === PIEDRA && jugadaUsuario === TIJERAS || jugadaComputadora === PAPEL && jugadaUsuario === PIEDRA || jugadaComputadora === TIJERAS && jugadaUsuario === PAPEL) {
      resultado = GANA_COMPUTADORA;
    }
    else {
      resultado = GANA_USUARIO;
    }
  }
  else {
    resultado = EMPATE;
  }

  return resultado;
}

function imprimirResultadoJugada(jugadaComputadora, jugadaUsuario, resultado) {
  // Imprime el resultado de la jugada
  // Tipo de dato de los parámetros: string
  // Valor que recibe ([jugadaComputadora] y [jugadaUsuario]): [PIEDRA], [PAPEL] o [TIJERAS]
  // Valor que recibe ([resultado]): [GANA_COMPUTADORA], [GANA_USUARIO] o [EMPATE]
  // Tipo de dato de retorno: undefined

  console.log('\nLa computadora eligio: %s', jugadaComputadora);
  console.log('El usuario eligio: %s', jugadaUsuario);
  console.log('El resultado fue: %s', resultado);
}



// PROGRAMA

// Ejecutamos una partida completa del juego
ejecutarPartida();