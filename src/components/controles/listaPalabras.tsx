import React from 'react';

interface Props {
    palabras: string[];
    palabrasEncontradas: string[];
}

const ListaPalabras: React.FC<Props> = ({ palabras, palabrasEncontradas }) => {
    return (
        <div className="listaDePalabras">
            {palabras.map(palabra => (
                <div
                    key={palabra}
                    className={palabrasEncontradas.includes(palabra) ? 'encontrada' : 'noEncontrada'}
                >
                    {palabra}
                </div>
            ))}
        </div>
    );
};

export default ListaPalabras;
