// Metodo push:
const frutas = ['manzana', 'banana', 'pera'];
frutas.push('naranja');
console.log(frutas);

// Metodo unshift:
const colores = ['rojo', 'verde', 'azul'];
colores.unshift('amarillo');
console.log(colores);

// Metodo splice:
const numeros = [1, 2, 3, 4];
numeros.splice(1, 0, 5);
console.log(numeros);

// Operador spread:
const arregloOriginal = [1, 2, 3];
const nuevoArreglo = [...arregloOriginal, 4, 5];
console.log(nuevoArreglo);

// Metodo concat:
const autos = ['Nissan', 'Toyota', 'BMW'];
const masAutos = autos.concat('Honda');
console.log(masAutos);

// Usando la propiedad length:
const letras = ['A', 'B', 'C'];
letras[letras.length] = 'D';
console.log(letras);