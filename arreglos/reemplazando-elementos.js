// Utilizando el indice:
const autos = ['Nissan', 'Toyota', 'Chevy', 'BMW'];
autos[0] = 'Ford';
console.log(autos);

// Metodo splice:
const numeros = [1, 2, 3, 4, 5, 6];
numeros.splice(2, 1, 7);
console.log(numeros);

// Metodo fill:
const letras = ['A', 'B', 'C', 'D', 'E', 'F'];
letras.fill('X', 2, 4);
console.log(letras);