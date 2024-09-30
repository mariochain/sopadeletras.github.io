import { FC } from 'react';
import AnimacionGana from './AnimacionGana';
import AnimacionPierde from './AnimacionPierde';

type Props = {
    mostrar: boolean;
    cerrarModal: () => void;
    gana: boolean;
};

const ModalAnimacion: FC<Props> = ({ mostrar, cerrarModal, gana }) => {
    if (!mostrar) return null;

    return (
        <>
            <div className='modal fade show d-block' role='dialog' tabIndex={-1} aria-modal='true'>
                <div className='modal-dialog modal-dialog-centered modal-sm'>
                    <div className='modal-content'>
                        <div className='modal-header d-flex justify-content-center'>
                            <h2 className='modal-title'> {gana ? "Ganaste" : "Perdiste"} </h2>
                        </div>
                        <div className='modal-body d-flex justify-content-center'>
                            {gana ? <AnimacionGana /> : <AnimacionPierde />}
                        </div>
                        <div className='modal-footer d-flex justify-content-center'>
                            <button className='btn btn-secondary mt-3' onClick={cerrarModal}>Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='modal-backdrop fade show'></div>
        </>
    );
};

export default ModalAnimacion;
