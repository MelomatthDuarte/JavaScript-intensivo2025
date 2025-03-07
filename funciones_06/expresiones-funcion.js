// Funciones declaradas como una expresion:
const saludo = function (nombre) {
    console.log(`Hola, ${nombre}!`);
}
saludo("Melo");

// Permite pasar la function como parametro:
function generarSaludo(saludoFuncion) {
    const nombres = ['Eleonor', 'Maria', 'Carlos'];
    for (const nombre of nombres) {
        saludoFuncion(nombre);
    }
}
generarSaludo(saludo);