// verificando si un string contiene un patron:
const patronEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2, }$/;
const email1 = "usuario@example.com";
const email2 = "usuario@dominio.com";
const email3 = "otro.usuario@sub.domain.co.uk";
console.log(patronEmail.test(email1));
console.log(patronEmail.test(email2));
console.log(patronEmail.test(email3));

// Reemplazando texto:
const poema = `Lorem ipsum dolor sit amet consectetur adipisicing elit.`;
const palabraReemplazar = "ipsum";
const remplazo = "aves";
const regex = new RegExp(palabraReemplazar, "gi");
const resultado = poema.replace(regex, remplazo);
console.log(resultado);
