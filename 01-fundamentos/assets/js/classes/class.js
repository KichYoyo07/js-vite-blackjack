class Persona {

    static _conteo = 0;

    static get conteo (){
        return Persona._conteo + ' instancias';
    }

    static mensaje (){
        console.log(this.nombre); // da undefined porque se esta trabajando con un metodo estatico y no hay ninguna instancia
        console.log('Hola a todos soy un metodo estatico');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor (nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        //console.log('Hola!');

        Persona._conteo++;
    }

    set setComidaFavorita (comida){
        this.comida = comida.toUpperCase()  ;
    }

    get getComidaFavorita (){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');

console.log(spiderman);
//console.log(ironman);

spiderman.quienSoy();
//ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tia May'

console.log(spiderman.getComidaFavorita);
console.log(spiderman);

//Persona._conteo = 2;
console.log('Conteo estatico', Persona._conteo);
console.log(Persona.conteo);

Persona.mensaje();