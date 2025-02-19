// Variable var
function ejemploVar() {
    if (true) {
        var x = 10;
    }
    console.log(x);
}

// Reasignacion de valor de var
var y = 5;
y = 7;
console.log(y);

// Redeclaracion de var:
var z = 2;
var z = 4;
console.log(z);

// Variable let
function ejemploLet() {
    if (true) {
        let x = 10;
    }
    console.log(x);
}

// Reasignacion de valor de let
let y = 5;
y = 7;
console.log(y);

// NO es posible re declarar una variable con el mismo nombre
let z = 2;
let z = 4;
console.log(z); // Error: Identificador 'z ya ha sido declarado

// Variable const
function ejemploConst() {
    if (true) {
        const x = 10;
    }
    console.log(x); // Error: x no esta definido
}

// NO se puede reasignar el valor de una constante
const y = 5;
y = 7; // Error: No se puede reasignar el valor de una constante

// NO es posible declarar una constante con el mismo nombre
const z = 2;
const z = 4; // Error: Identificador 'z ya ha sido declarado


