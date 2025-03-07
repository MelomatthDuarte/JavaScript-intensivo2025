// "This" hace referencia al contexto donde se invoca:
// Ejemplo 1: hace referencia al contexto global.
console.log(this);

// Ejemplo 2: En un objeto, hace referencia al objeto:
const miObjeto = {
    mensaje: "Mensaje del Objeto",
    functionRegular: function() {
        console.log(this.mensaje);
    },
};
miObjeto.functionRegular();

//Ejemplo 3: En una funcion, hace referencia al contexto global:
function probarThis() {
    console.log(this);
    const probarThisFlecha = () => {
        console.log(this);
    }
    probarThisFlecha();
}
probarThis();

// Ejemplo 4: diferencia entre funcion regular y una funcion flecha:
const unObjeto = {
    mensaje: "Mensaje del Objeto",
    functionRegular: function() {
        console.log(this.mensaje);
    },
    funcionFlecha: () => {
        console.log(this.mensaje);
    }
};
unObjeto.functionRegular();
unObjeto.funcionFlecha();