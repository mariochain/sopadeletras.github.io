import { TAMANO_CUADRICULA, Direccion } from '../helpers/valoresDefinidos';

export const generarCuadriculaVacia = (tamano: number) => Array(tamano).fill(null).map(() => Array(tamano).fill('_'));

export const colocarPalabrasEnCuadricula = (palabras: string[], cuadricula: string[][]) => {
    palabras.forEach(palabra => {
        let colocada = false;
        while (!colocada) {
            const fila = Math.floor(Math.random() * TAMANO_CUADRICULA);
            const columna = Math.floor(Math.random() * TAMANO_CUADRICULA);
            const direccion = Math.floor(Math.random() * 3) as Direccion;

            if (puedeColocarPalabra(palabra, cuadricula, fila, columna, direccion)) {
                for (let i = 0; i < palabra.length; i++) {
                    if (direccion === Direccion.Horizontal) cuadricula[fila][columna + i] = palabra[i];
                    if (direccion === Direccion.Vertical) cuadricula[fila + i][columna] = palabra[i];
                    if (direccion === Direccion.Diagonal) cuadricula[fila + i][columna + i] = palabra[i];
                }
                colocada = true;
            }
        }
    });
};

export const puedeColocarPalabra = (palabra: string, cuadricula: string[][], fila: number, columna: number, direccion: Direccion) => {
    const tamano = palabra.length;
    if (direccion === Direccion.Horizontal && columna + tamano > TAMANO_CUADRICULA) return false;
    if (direccion === Direccion.Vertical && fila + tamano > TAMANO_CUADRICULA) return false;
    if (direccion === Direccion.Diagonal && (fila + tamano > TAMANO_CUADRICULA || columna + tamano > TAMANO_CUADRICULA)) return false;

    for (let i = 0; i < tamano; i++) {
        if (
            (direccion === Direccion.Horizontal && cuadricula[fila][columna + i] !== '_') ||
            (direccion === Direccion.Vertical && cuadricula[fila + i][columna] !== '_') ||
            (direccion === Direccion.Diagonal && cuadricula[fila + i][columna + i] !== '_')
        ) {
            return false;
        }
    }
    return true;
};

export const rellenarCuadriculaConLetrasAleatorias = (cuadricula: string[][]) => {
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    cuadricula.forEach(fila => {
        fila.forEach((celda, columna) => {
            if (celda === '_') fila[columna] = alfabeto[Math.floor(Math.random() * alfabeto.length)];
        });
    });
};