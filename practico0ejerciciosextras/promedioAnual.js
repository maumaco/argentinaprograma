let temperaturasFahrenheit = [32, 41, 50, 59, 68, 77, 86, 95, 104, 113, 122, 131];
let promedioFahrenheit = (temperaturasFahrenheit[0] + temperaturasFahrenheit[1] + temperaturasFahrenheit[2] + temperaturasFahrenheit[3] + temperaturasFahrenheit[4] + temperaturasFahrenheit[5] + temperaturasFahrenheit[6] + temperaturasFahrenheit[7] + temperaturasFahrenheit[8] + temperaturasFahrenheit[9] + temperaturasFahrenheit[10] + temperaturasFahrenheit[11]) / 12;
let promedioCelsius = (promedioFahrenheit - 32) * 5 / 9;

console.log('Promedio de doce números y conversión de grados Fahrenheit a grados Celsius');
console.log('¿Cuál es el promedio anual en grados Celsius de las siguientes temperaturas mensuales en grados Fahrenheit: 32, 41, 50, 59, 68, 77, 86, 95, 104, 113, 122 y 131?');
console.log(promedioCelsius);