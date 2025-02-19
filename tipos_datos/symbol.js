// Es un valor unico e inmutable
const miSimbolo = Symbol();
console.log(miSimbolo);  //salida: symbol

// con descripcion:
const miSimboloConDescripcion = Symbol('algun nombre o descripcion');
console.log(miSimboloConDescripcion.toString());

// uso como llave unica:
const llaveUnica = Symbol('llave unica');

const unObjeto = {
    [llaveUnica]: 'Valor asociado a la llave unica'
};
console.log(unObjeto[llaveUnica]); // salida: valor asociado a la llave unica