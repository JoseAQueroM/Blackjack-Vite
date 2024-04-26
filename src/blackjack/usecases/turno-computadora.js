import { pedirCarta } from './pedir-carta';
import { valorCarta } from './valor-carta';
import { crearCarta } from './crear-carta';

// Turno de la computadora

/**
 * 
 * @param {Number} puntosMinimos Puntos Minimo para ganarle al jugador
 * @param {HTMLElement} puntosHTML Mostrando el total en pantalla
 * @param {HTMLElement} divCartasComputadora Div para mostrar cartas
 * @param {Array<String>} deck Deck creando
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora ,deck = [] ) => {

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCarta( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}