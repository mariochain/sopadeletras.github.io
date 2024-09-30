import React from 'react';

interface Props {
    onReiniciar: () => void;
    children: React.ReactNode;
}

const BotonJuego: React.FC<Props> = ({ onReiniciar, children }) => {
    return (
        <button id="botonControl" onClick={onReiniciar}>
            {children}
        </button>
    );
};

export default BotonJuego;
