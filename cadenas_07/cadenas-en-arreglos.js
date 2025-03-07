const texto = `Lorem ipsum dolor sit amet consectetur adipisicing elit.`;

const resultado1 = texto.split(" ");
console.log(resultado1);

const resultado2 = texto.split("o");
console.log(resultado2);

// Como reemplazar una palabra:
const textoSplit = texto.split(' ');
textoSplit[3] = 'PALABRA';
console.log(textoSplit.join(' '));

