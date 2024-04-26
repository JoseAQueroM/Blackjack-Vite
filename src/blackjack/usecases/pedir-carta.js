
/**
 * 
 * @param {Array<String>} deck 
 * @returns Retorna una carta del array
 */

export const pedirCarta = ( deck ) => {

   
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
