const texto = `Lorem ipsum dolor sit amet consectetur adipisicing elit.`;

// Toma el texto desde el indice 0 al indice 5:
const lorem = texto.substring(0, 5);
console.log(lorem);

// Extrae los 10 primeros caracteres:
const primerasLetras = texto.slice(undefined, 10);
console.log(primerasLetras);

// Toma todo el string, excepto los 10 primeros caracateres:
const ignoraPrimerasLetras = texto.slice(10);
console.log(ignoraPrimerasLetras);

// Toma el caracter 5 al caracater 10:
const ignoraPrimerasLetras2 = texto.slice(5, 10);
console.log(ignoraPrimerasLetras2);

