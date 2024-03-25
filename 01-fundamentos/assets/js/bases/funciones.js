function saludar (nombre){
    console.log(arguments);
    console.log('Hola '+ nombre);
    return [1,2];

    console.log('Este codigo nunca se va a ejecutar por estar despues del return');
}

const saludar2 = function(nombre){
    console.log('Hola '+nombre);
}

const saludarFlecha = () =>{
    console.log('Hola Fecha');
}

const saludarFlecha2 = nombre =>{
    console.log('Hola '+ nombre);
}

saludar('Fernando', 40, true, 'Costa Ricar');

const retornoDeSaludar = saludar('Fernando', 40, true, 'Costa Ricar');
console.log(retornoDeSaludar[0], retornoDeSaludar[1]);
saludar2('Yoyo');
saludarFlecha();
saludarFlecha2('Sol');

function sumar (a,b){
    return a+b;
}

console.log(sumar(1,2));

const sumar2 = (a,b) => {
    return a+b;
}

console.log(sumar2(1,3));

const sumar3 = (a,b) => a+b;

console.log(sumar3(1,3));

function getAleatorio(){
    return Math.random();
}

console.log(getAleatorio());

const getAleatorio2 = () => Math.random();

console.log((getAleatorio2()));
