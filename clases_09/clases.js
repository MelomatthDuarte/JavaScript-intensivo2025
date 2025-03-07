class Persona {
    constructor(nombreParametro, apellidoParametro) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
    }
    obtenerNombreCompleto(){
        return `${this.nombre} ${this.apellido}`;
    }
}

let samuel = new Persona('Samuel', 'Reyes');
console.log(samuel.nombre);
console.log(samuel.obtenerNombreCompleto());

let david = new Persona('David', 'Quesada');
console.log(david.nombre);
console.log(david.obtenerNombreCompleto());
