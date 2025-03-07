// Funcion flecha con valor de retorno implicito:
let sumar = (x, y) => x + y;

let resultado = sumar(5, 3);
console.log(resultado);

// FUnsion flecha sin parametros:
let decirHola = () => {
    console.log("Hola!");
}
decirHola();

// Funcion flecha con un parametros:
let raizcuadrada = x => x * x;
let resultado2 = raisCuadrada(9);
console.log(resultado2);

// Funcion flecha con objeto literal:
let crearPersona = (nombre, edad) => ({nombre: nombre, edad: edad});

let persona = crearPersona("Melo", 35);
console.log(persona);