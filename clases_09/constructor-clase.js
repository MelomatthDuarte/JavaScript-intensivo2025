class Persona {
    constructor(nombreParametro, apellidoParametro) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.largoNombreCompleto = this.obtenerNombreCompleto().length;
    }
    obtenerNombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
}

let david = new Persona('David', 'Quesada');
console.log(david.largoNombreCompleto);
console.log(david.obtenerNombreCompleto());

class Auto {
    marca = undefined;
};
const auto = new Auto();
console.log(auto);
auto.marca = 'Ford';