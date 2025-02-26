// Recorriendo propiedades
let persona = {
    nombre: "Melo",
    apellido: "Duarte",
    edad: 30,
};

for (let llave in persona) {
    console.log(`${llave}: ${}`)
}