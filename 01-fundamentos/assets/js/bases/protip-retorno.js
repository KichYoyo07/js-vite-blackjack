function crearPersona (nombre, apellido){
    return { nombre, apellido }
}

const personaFlecha = (nombre, apellido) => ({nombre, apellido});

const persona = crearPersona('Fernando', 'Herrera');
console.log(persona);

console.log(personaFlecha('Fernando', 'Herrera'));

function imprimiendoArgumentos (){
    console.log(arguments);
}

const imprimiendoArgumentos2 = (edad, ...arg) =>{
    console.log(edad, arg);
    return arg;
}

imprimiendoArgumentos(10, true, false, 'Fernando', 'Hola');
imprimiendoArgumentos2(10, true, false, 'Fernando', 'Hola');

const [casado, vivo, nombre, saludo] =imprimiendoArgumentos2(10, true, false, 'Fernando', 'Hola');
console.log({casado, vivo, nombre, saludo});

const {apellido} = crearPersona('Fernando', 'Herrera');
console.log({apellido});

const {apellido: nuevoApellido} = crearPersona('Fernando', 'Herrera');
console.log({nuevoApellido});

let tony = {
    nombre: 'Tony Strak',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

const imprimePropiedades = (personaje) =>{
    console.log(personaje.nombre);
    console.log(personaje.codeName);
    console.log(personaje.vivo);
    console.log(personaje.edad);
    console.log(personaje.trajes);

}

imprimePropiedades(tony);

const imprimePropiedades2 = ({nombre, codeName, vivo, edad = 15, trajes}) =>{
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});

}

imprimePropiedades2(tony);