// Recorriendo propiedades
let persona = {
    nombre: "Melo",
    apellido: "Duarte",
    edad: 30,
};

for (let llave in persona) {
    console.log(`${llave}: ${persona[llave]}`);
}

// Recorriendo arreglos:
let colores = ["rojo", 'verde', 'azul'];

for (let indice in colores) {
    console.log(`Indice ${indice}: ${colores[indice]}`);
}