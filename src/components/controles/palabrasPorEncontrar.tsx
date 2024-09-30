import React from 'react';
import Puntaje from './puntaje';
import BotonJuego from './botonJuego';
import Tiempo from './tiempo';
import ListaPalabras from './listaPalabras';


interface Props {
    palabras: string[],
    palabrasEncontradas: string[],
    tiempo: number,
    reiniciarJuego: () => void,
    nuevoJuego: () => void
}

const PalabrasPorEncontrar: React.FC<Props> = ({ palabras, palabrasEncontradas, tiempo, reiniciarJuego, nuevoJuego }) => {
    return (
        <div id="palabrasPorEncontrar">
            <Puntaje palabrasEncontradas={palabrasEncontradas.length} numeroDePalabras={palabras.length} />
            <ListaPalabras palabras={palabras} palabrasEncontradas={palabrasEncontradas} />
            <Tiempo tiempo={tiempo} />
            <BotonJuego onReiniciar={reiniciarJuego}>Reiniciar 🔄</BotonJuego>
            <BotonJuego onReiniciar={nuevoJuego}>Nuevo Juego 🆕</BotonJuego>
        </div>
    );
};

export default PalabrasPorEncontrar;
