// Declaraciones switch :
// Ejemplo 1:
let diaSemana = 3;
let nombreDia;

switch (diaSemana) {
    case 1:
        nombreDia: "Domingo";
        break;
    case 2:
        nombreDia: "Lunea";
        break;
    case 3:
        nombreDia = "Martes";
        break;
    case 4:
        nombreDia = "Miercoles";
        break;
    case 5:
        nombreDia = "Jueves";
        break;
    case 6:
        nombreDia = "Viernes";
        break;
    case 7:
        nombreDia = "Sabado";
        break;
}
console.log(`Hoy es ${nombreDia}.`);

