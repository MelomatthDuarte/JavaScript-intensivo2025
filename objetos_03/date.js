// Obtener la fecha y hora actual:
const fechaHoraActual = new Date();
console.log(fechaHoraActual);

//Obtener informacion sobre la fecha:
const ahora = new Date();
const anno = ahora.getFullYear();
const mes = ahora.getMonth();
const dia = ahora.getDate();
const horas = ahora.getHours();
const minutos = ahora.getMinutes();
const segundos = ahora.getSeconds();

console.log(`Hoy es ${anno} - ${dia} ${horas}: ${minutos}: ${segundos}`);

// Como crear un objeto con una fecha y hora especifica:
const fechaEspecifica = new Date(2025, 20, 6, 41, 12 )
console.log(fechaEspecifica);