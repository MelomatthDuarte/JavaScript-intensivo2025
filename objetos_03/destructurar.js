// Destructuracion de arreglos:
const numeros = [1, 2, 3, 4, 5];
const [primero, segundo, , cuarto] = numeros;
console.log(primero);
console.log(segundo);
console.log(cuarto);

// Destructuracion de objetos:
const usuario = { nombre:"Matthew", edad: 35, esEstudiante: true };
const { nombre, edad, esEstudiante } = usuario;
console.log(nombre);
console.log(edad);
console.log(esEstudiante);
