import { FC, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { PalabrasPorEncontrar, CuadriculaSopa } from './controles';
import ModalAnimacion from './../utils/modalAnimacion';
import { generarCuadriculaVacia, colocarPalabrasEnCuadricula, rellenarCuadriculaConLetrasAleatorias } from '../utils/CreacionJuego';
import MenuSeleccion from './MenuSeleccion';
import { TAMANO_CUADRICULA, Direccion, TIEMPO_INICIAL } from '../helpers/valoresDefinidos';
import 'react-toastify/dist/ReactToastify.css';

const SopaLetras: FC = () => {
    const [cuadricula, setCuadricula] = useState<string[][]>([]);
    const [seleccionActual, setSeleccionActual] = useState<number[]>([]);
    const [palabrasEncontradas, setPalabrasEncontradas] = useState<string[]>([]);
    const [direccionSeleccion, setDireccionSeleccion] = useState<Direccion | null>(null);
    const [tiempo, setTiempo] = useState(TIEMPO_INICIAL);
    const [juegoEnCurso, setJuegoEnCurso] = useState(false);
    const [mostrarAnimacion, setMostrarAnimacion] = useState(false);
    const [gana, setGana] = useState(false);
    const [mostrarMenu, setMostrarMenu] = useState(true);
    const [palabras, setPalabras] = useState<string[]>([]);
    const [categoria, setCategoria] = useState<string | null>(null);

    useEffect(() => {
        if (palabras.length > 0) {
            iniciarNuevoJuego();
        }
    }, [palabras]);

    useEffect(() => {
        if (juegoEnCurso) {
            const temporizador = setInterval(() => {
                setTiempo(prev => prev - 1);
            }, 1000);

            return () => clearInterval(temporizador);
        }
    }, [juegoEnCurso]);

    useEffect(() => {
        if (tiempo === 0) {
            setJuegoEnCurso(false);
            setMostrarAnimacion(true);
            setGana(false);
        }
    }, [tiempo]);

    const seleccionarCategoria = (categoria: string, palabrasSeleccionadas: string[]) => {
        setCategoria(categoria);
        setPalabras(palabrasSeleccionadas);
        console.log({ palabrasSeleccionadas }, palabras);
    };

    const iniciarNuevoJuego = () => {
        const nuevaCuadricula = generarCuadriculaVacia(TAMANO_CUADRICULA);
        colocarPalabrasEnCuadricula(palabras, nuevaCuadricula);
        rellenarCuadriculaConLetrasAleatorias(nuevaCuadricula);
        setCuadricula(nuevaCuadricula);
        resetearJuego();
        setJuegoEnCurso(true);
        setMostrarMenu(false);
    };

    const resetearJuego = () => {
        setSeleccionActual([]);
        setPalabrasEncontradas([]);
        setDireccionSeleccion(null);
        setTiempo(TIEMPO_INICIAL);
        setGana(false);
    };



    const esSeleccionLineal = (nuevaFila: number, nuevaColumna: number) => {
        if (seleccionActual.length === 0) return true;
        const primerIndice = seleccionActual[0];
        const primeraFila = Math.floor(primerIndice / TAMANO_CUADRICULA);
        const primeraColumna = primerIndice % TAMANO_CUADRICULA;

        if (direccionSeleccion !== null) {
            return (
                (direccionSeleccion === Direccion.Horizontal && nuevaFila === primeraFila) ||
                (direccionSeleccion === Direccion.Vertical && nuevaColumna === primeraColumna) ||
                (direccionSeleccion === Direccion.Diagonal && Math.abs(nuevaFila - primeraFila) === Math.abs(nuevaColumna - primeraColumna))
            );
        } else {
            if (nuevaFila === primeraFila) setDireccionSeleccion(Direccion.Horizontal);
            else if (nuevaColumna === primeraColumna) setDireccionSeleccion(Direccion.Vertical);
            else if (Math.abs(nuevaFila - primeraFila) === Math.abs(nuevaColumna - primeraColumna)) setDireccionSeleccion(Direccion.Diagonal);
            else return false;

            return true;
        }
    };

    const seleccionarCelda = (fila: number, columna: number) => {
        const indice = fila * TAMANO_CUADRICULA + columna;
        if (seleccionActual.includes(indice)) return

        if (!esSeleccionLineal(fila, columna)) {
            resetearSeleccionError();
            return;
        }

        const nuevaSeleccion = [...seleccionActual, indice];
        setSeleccionActual(nuevaSeleccion);
        verificarPalabra(nuevaSeleccion);
    };

    const verificarPalabra = (nuevaSeleccion: number[]) => {
        const palabraSeleccionada = nuevaSeleccion.map(idx => {
            const fila = Math.floor(idx / TAMANO_CUADRICULA);
            const columna = idx % TAMANO_CUADRICULA;
            return cuadricula[fila][columna];
        }).join('');

        if (palabras.includes(palabraSeleccionada) && !palabrasEncontradas.includes(palabraSeleccionada)) {
            toast.success(`¡Palabra encontrada: ${palabraSeleccionada}!`, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setPalabrasEncontradas(prev => [...prev, palabraSeleccionada]);
            resetearSeleccion();

            if (palabrasEncontradas.length + 1 === palabras.length) {
                setTimeout(() => {
                    setGana(true);
                    setMostrarAnimacion(true);
                    setJuegoEnCurso(false);
                }, 500);
            }
        } else if (!palabras.some(p => p.startsWith(palabraSeleccionada))) {
            resetearSeleccion();
        }
    };

    const resetearSeleccion = () => {
        setSeleccionActual([]);
        setDireccionSeleccion(null);
    };

    const resetearSeleccionError = () => {
        toast.error(`Error`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setSeleccionActual([]);
        setDireccionSeleccion(null);
    };

    const cerrarModal = () => {
        setMostrarAnimacion(false);
        setMostrarMenu(true);
    };

    const nuevoJuego = () => {
        setJuegoEnCurso(false);
        setMostrarAnimacion(false);
        resetearJuego();
        setMostrarMenu(true);
    };

    return (
        <>
            <div id="contenedorPrincipal">
                <div className='d-flex flex-row'>
                    <h1 className='col-6 text-center'>Sopa de Letras</h1>
                    <h1 className='col-6 text-center'>{categoria ? `${categoria}` : ""}</h1>
                </div>

                <div id="contenedorJuego">
                    <CuadriculaSopa
                        cuadricula={cuadricula}
                        seleccionarCelda={seleccionarCelda}
                        seleccionActual={seleccionActual}
                        tamanoDeLaCuadricula={TAMANO_CUADRICULA}
                    />
                    <PalabrasPorEncontrar
                        palabras={palabras}
                        palabrasEncontradas={palabrasEncontradas}
                        tiempo={tiempo}
                        nuevoJuego={nuevoJuego}
                        reiniciarJuego={iniciarNuevoJuego}
                    />
                </div>
                <ToastContainer />
            </div>
            <MenuSeleccion mostrar={mostrarMenu} seleccionarCategoria={seleccionarCategoria} />
            <ModalAnimacion
                mostrar={mostrarAnimacion}
                cerrarModal={cerrarModal}
                gana={gana}
            />
        </>
    );
}

export default SopaLetras;