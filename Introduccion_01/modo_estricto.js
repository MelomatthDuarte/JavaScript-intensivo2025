'use strict';

// Previene asignar valores a variables no declaradas anteriormente:
variablesDeclaracion = 17;

// Previene la reasignacion de valores globales:
NaN = 10;

// Previene parametros duplicados en funciones
function suma(x, y) {
    return x + y;
}

// No permite eliminar variables funciones o argumentos de funciones
var x = 10
delete x;
