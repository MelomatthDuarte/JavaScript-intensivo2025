const string1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
const string2 = "Maecenas dapibus tellus ac cursus commodo.";

// Ejemplo1:
const resultado1 = string1 + string2;
console.log(resultado1);

// Ejemplo2:
const resultado2 = `${string1} ${string2}`;
console.log(resultado2);

// Ejemplo3:
const resultado3 = string1.concat(string2);
console.log(resultado3);

// Ejemplo4:
const arr = [string1, string2];
const resultado4 = arr.join();
console.log(resultado4);
