const persona = {
    nombre: "Melo",
    edad: 35,
    ciudad: "Monteria",
};

// Object.keys();
let llaves = Object.keys(persona);
console.log(llaves);

// Object.values();
const valores = Object.values(persona);
console.log(valores);

// Object.entries();
const entradas = Obkect.entries(persona);
console.log(entradas);

// Object.assign();
const destino = { a:1, b:2 };
const origen = {b: 3, c:4};
const objetoFusionado = Object.assign({}, destino, origen );
console.log(objetoFusionado);