// Enviar parametros por valor:
// Los datos primitivos siempre se pasan por valor

function imcrementar(numero) {
    numero++;
    return numero;
}

let num = 5;
let resultado = incrementar(num);

console.log(num);
console.log(resultado);

// Paso los parametros por referencia:
// Los datos no primitivos siempre se pasan por refrencia

function agregarArreglo(arr, valor) {
    arr.push(valor);
    return arr;
}

let miArreglo = [1, 2, 3];
let miArregloResultado = agregarArreglo(miArreglo, 4);
console.log(miArreglo);
console.log(miArregloResultado);
