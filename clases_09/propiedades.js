class Persona {
    static especie = 'Homo sapiens';
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
console.log(david.nombre);
console.log(david.apellido);
console.log(david.largoNombreCompleto);
console.log(Persona.especie);