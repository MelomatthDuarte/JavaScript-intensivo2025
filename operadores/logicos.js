// Operadores logicos:

const x = true;
const y = false;

// Expresiones logicas:
// AND: doble ampersand &&
let resultado = x && y && true; // resultado es false

// OR: doble pipe o barra vertical ||
let resultado2 = x || y || false; // resultado es true

// NOT: signo de exclamacion:
let resultado3 = !x; // resultado es contrario a true = false
let resultado4 = !y // resultado es contrario a false = true

// Podemos componer expresiones mas largas y complejas:

const a = 5;
const b = 6;
const c = 7;

const resultadoExp1 = (a > c) && (b < c);
console.log(resultadoExp1);

const resultadoExp2 = (a > c) || (b < c);
console.log(resultadoExp2);

const resultadoExp3 = (a <= b) && ((a > c) || (b < c));
console.log(resultadoExp3);

const resultadoExp4 = (a <= b) && ((a > c) || (b < c));
console.log(resultadoExp4);