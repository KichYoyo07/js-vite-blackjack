
let a = 5;

if ( a >= 10 ) {
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

console.log('Final del programa');

const hoy = new Date();
let dia = hoy.getDay();
console.log(hoy);
console.log({dia});

if (dia === 0){
    console.log('Domingo');
}if (dia === 2){
    console.log('Martes');
}  else {
    console.log('No es domingo ni martes');
}

dia = 2; 

let diaLetra = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
}
console.log(diaLetra[dia] || 'Dia no es valido');

let diaLetra2 = {
    0: () => 'Domingo - 0',
    1: () => 'Lunes - 1',
    2: () => 'Martes - 2',
    3: () => 'Miercoles - 3',
    4: () => 'Jueves - 4',
    5: () => 'Viernes - 5',
    6: () => 'Sabado - 6'
}
console.log(diaLetra2[dia]() || 'Dia no es valido');

const diaLetra3 = ['Lunes', 'Domingo', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado',];

console.log(diaLetra3[dia] || 'Dia no es valido');
