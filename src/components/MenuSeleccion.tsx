import React, { FC } from 'react';
import { categoriasPalabras } from '../helpers/valoresDefinidos'; // Importa el archivo con las categorías

interface Props {
    mostrar: boolean;
    seleccionarCategoria: (categoria: string, palabras: string[]) => void; // Callback para seleccionar la categoría y las palabras
}

const MenuSeleccion: FC<Props> = ({ mostrar, seleccionarCategoria }) => {
    if (!mostrar) return null;

    return (
        <>
            <div className='modal fade show d-block' role='dialog' tabIndex={-1} aria-modal='true'>
                <div className='modal-dialog modal-dialog-centered modal-md'>
                    <div className='modal-content'>
                        <div className='modal-header d-flex justify-content-center'>
                            <h2>Selecciona una categoría</h2>
                        </div>
                        <div className='modal-body d-flex flex-wrap justify-content-center'>
                            {Object.entries(categoriasPalabras).map(([categoria, datos]) => (
                                <button key={categoria} className="btn btn-light btn-lg col-5 m-1"
                                    onClick={() => seleccionarCategoria(`${datos.emoji} ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}`, datos.palabras)}>
                                    {datos.emoji} {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='modal-backdrop fade show'></div>
        </>
    );
};

export default MenuSeleccion;
