import React from 'react';

interface Props {
    tiempo: number;
}

const Tiempo: React.FC<Props> = ({ tiempo }) => {
    const formatTiempo = (tiempoEnSegundos: number): string => {
        const minutos = Math.floor(tiempoEnSegundos / 60);
        const segundos = tiempoEnSegundos % 60;
        return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
    };
    const tiempoEnRojo = tiempo <= 20;

    return (
        <div id="tiempo" className={tiempoEnRojo ? 'tiempo-rojo' : ''}>
            Tiempo: {formatTiempo(tiempo)}
        </div>
    );
};

export default Tiempo;
