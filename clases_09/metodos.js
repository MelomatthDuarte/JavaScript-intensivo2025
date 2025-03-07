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
    obtenerSaludo(hora) {
        if (hora === 'manana') {
            return `Buenos dias, mi nombre es ${this.obtenerNombreCompleto()}`;
        } else {
            return `Buenos tardes, mi nombre es ${this.obtenerNombreCompleto()}`;
        }
    }
    static metodoEstatico() {
        console.log(Persona.especie);
        console.log(this.especie);
        console.log(this.nombre);
    }
}
let david = new Persona('David', 'Quesada');
console.log(david.obtenerNombreCompleto());
console.log(david.obtenerSaludo('tarde'));

Persona.metodoEstatico();