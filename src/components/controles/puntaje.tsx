import React from 'react';

interface Props {
    palabrasEncontradas: number;
    numeroDePalabras: number;
}

const Puntaje: React.FC<Props> = ({ palabrasEncontradas, numeroDePalabras }) => {
    return (
        <div id="puntaje">Puntaje: {palabrasEncontradas}/{numeroDePalabras}</div>
    );
};

export default Puntaje;
