import _ from 'underscore';

// Esta función crea un nuevo deck

/**
 * Crea el Deck de Cartas
 * @param {Array<string>} tiposDeCarta Tipos: ['C','D','H','S'];
 * @param {Array<string>} tiposEspeciales Tipos Especiales: ['A','J','Q','K'];
 * @returns {Array}
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}

