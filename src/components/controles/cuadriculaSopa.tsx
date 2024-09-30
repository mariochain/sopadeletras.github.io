import React from 'react';

interface Props {
    cuadricula: string[][];
    seleccionarCelda: (fila: number, columna: number) => void;
    seleccionActual: number[];
    tamanoDeLaCuadricula: number;
}

const CuadriculaSopa: React.FC<Props> = ({ cuadricula, seleccionarCelda, seleccionActual, tamanoDeLaCuadricula }) => {
    return (
        <div id="contenedorSopa">
            {cuadricula.map((fila, indiceFila) =>
                fila.map((celda, indiceColumna) => (
                    <div
                        key={`${indiceFila}-${indiceColumna}`}
                        onClick={() => seleccionarCelda(indiceFila, indiceColumna)}
                        className={
                            seleccionActual.includes(indiceFila * tamanoDeLaCuadricula + indiceColumna)
                                ? 'seleccionada'
                                : 'encontrada'
                        }
                    >
                        {celda}
                    </div>
                ))
            )}
        </div>
    );
};

export default CuadriculaSopa;
