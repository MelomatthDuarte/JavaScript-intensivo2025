// Funcion se ejecuta cuando se hace click en alguno de los botones:
function clickEnRobot(numRobot) {
    console.log(`El robot #${numRobot} fue presionado`);
}

// FUncion se ejecuta cuando se hace envio al formulario:
function validarFormulario(){
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const patronEmail =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2, }$/;

    if (!patronEmail.test(email)){
        alert("El correo electronico no es valido");
        return false;
    }

    if (nombre == "" || apellido == "" || email == "" || password == ""){
        alert("Todos los campos deben llenarse");
        return false;
    }
    return false;
}

// Ejemplos de diferentes tipos de eventos:
// La lista completa puedes encontrarla en este enlace:
// https://developer.mozilla.org/en-US/docs/Web/API/Event

document.addEventListener('scroll', evento => {
    console.log('Scroll en la pagina', evento);
});

window.addEventListener('resize', evento => {
    console.log(evento);
    console.log('Cambio de tamano de la pagina', window.innerWidth, window.innerHeight);
});

document.getElementById("nombre").addEventListener('input', evento => {
    console.log(evento);
    console.log('Tecleo del nombre', evento.data);
});

// Ejemplo de uso de removeEventListener:
let contador = 0;
const escuchandoClickPagina = evento => {
    console.log('Clicj en la pagina', evento);
    contador++;
    if(contador > 5){
        document.removeEventListener('click', escuchadoClickPagina);
    }
}

document.addEventeListener('click', escuchadoClickPagina);

//Ejemplo dispatchEvent:
for (let i = 0; i < 3; i++) {
    document.dispatchEvent(new Event('click'));
}