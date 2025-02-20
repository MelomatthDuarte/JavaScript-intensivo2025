// Objetos en javascript

const persona = {
    nombre: "Melo",
    apellido: "Duarte",
    edad: 35,
    esAutorizado: true,
};
console.log(persona.nombre); // salida: Melo

// expresiones de objeto
const nombreCompleto = persona.nombre + ' ' + persona.apellido;
persona.edad = 40;

// Objetos aninados:
const persona2 = {
    nombre: "Melo",
    apellido: "Duarte",
    edad: 35,
    esAutorizado: true,
    direccion: {
        calle: 61,
        avenida: 42,
        codigoPostal: "123456"
    }
};
console.log(persona2.direccion.calle);

