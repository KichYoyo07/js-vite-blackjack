// 2C = Two Of Clubs (Treboles)
// 2D = Two Of Diamonds (Diamantes)
// 2H = Two Of Hearts (Corazones)
// 2S = Two Of Spades (Espadas)

const miModulo= (() => { 
    'use strict'

    let deck         = [];
    const tipos      = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'];

    // let puntosJugador = 0,
    //     puntosComputadora = 0;

    let puntosJugadores =[];

    //Referencias del HTML

    const btnPedir   = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo   = document.querySelector('#btnNuevo');

    const divCartasJuegadores  = document.querySelectorAll('.divCartas'),
                    puntosHTML = document.querySelectorAll('small');

    // console.log(btnPedir);


    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck();

        puntosJugadores = [];
        for (let i= 0; i<numJugadores; i++){
            puntosJugadores.push(0);
        }
       // console.log({puntosJugadores});
       
       puntosHTML.forEach(elem => elem.innerText = 0);
       divCartasJuegadores.forEach(elem => elem.innerText = '');

       btnDetener.disabled = false;
       btnPedir.disabled   = false;
    };

    // esta funcion crea un nuevo deck
    const crearDeck = () => {

        deck = [];
        for (let i=2; i<=10;i++){
            for(let tipo of tipos){
                deck.push( i + tipo);
            }
        }

        for(let tipo of tipos){
        for (let esp of especiales){
                deck.push( esp + tipo);
        }
        }
    // console.log(deck);
        return  _.shuffle (deck);
        //console.log(deck);
    }

    const pedirCarta = () =>{
        if(deck.length === 0){
            throw 'Ya no hay cartas en el deck';
        }
        // console.log(deck);
        // console.log(carta);
        return deck.pop();
    }

    const valorCarta = (carta) =>{
        const valor = carta.substring(0, carta.length-1);
        // console.log({valor});
        
        // if (isNaN(valor)){
        //     puntos = (valor === 'A') ? 11 : 10;
        // } else {
        //     console.log('Es un número');
        //     puntos = valor * 1;
        // }
        return (isNaN(valor)) ?
              (valor === 'A') ? 11 : 10
             : valor * 1;

    }
    // Turno: 0 = a primer jugador y ultimo a computadora
    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerText= puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasJuegadores[turno].append(imgCarta);
    }

    const determinarGanador = () =>{

        const [puntosMinimos, puntosComputadora] = puntosJugadores;

        setTimeout( () =>{ 
            if (puntosComputadora === puntosMinimos){
                alert('Nadie Gana');
            } else if (puntosMinimos > 21){
                alert('Computadora Gana');
            }else if (puntosComputadora > 21) {
                alert('Jugador Gana');
            }else {
                alert('Computadora Gana');
            }
        }, 130);
    }

    const turnoComputadora = (puntosMinimos) => {

        let puntosComputadora = 0;

        do {
            const carta = pedirCarta();
            puntosComputadora= acumularPuntos(carta, puntosJugadores.length - 1);

            crearCarta(carta, puntosJugadores.length-1);
            // const imgCarta = document.createElement('img');
            // imgCarta.src = `assets/cartas/${ carta }.png`;
            // imgCarta.classList.add('carta');
            // divCartasComputadora.append(imgCarta);
            // if(puntosMinimos > 21){
            //     break;
            // } 
        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
        determinarGanador();
    }
    // pedirCarta();
    // const valor = valorCarta (pedirCarta()); 
    // console.log({valor});

    //Eventos
    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);
        // puntosJugador =puntosJugador+ valorCarta(carta);
        // puntosHTML[0].innerText= puntosJugador;

        crearCarta(carta, 0);
        // const imgCarta = document.createElement('img');
        // imgCarta.src = `assets/cartas/${ carta }.png`;
        // imgCarta.classList.add('carta');
        // divCartasJuegador.append(imgCarta);
        
        if (puntosJugador > 21){
            console.warn('Lo siento, perdiste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );

        } else if ( puntosJugador === 21 ){
            console.warn('21, genial!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
            
        } 

    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0]);   
    });

    // btnNuevo.addEventListener('click',() => {
       // console.clear();
    //     inicializarJuego();
    // });

    return {
       nuevoJuego: inicializarJuego
    };
})();