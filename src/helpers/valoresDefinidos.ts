export const categoriasPalabras = {
    animales: {
        emoji: "🐾",
        palabras: ["PERRO", "GATO", "ELEFANTE", "TIGRE", "LEÓN", "CEBRA"]
    },
    deportes: {
        emoji: "🏅",
        palabras: ["FUTBOL", "BALONCESTO", "TENIS", "ATLETISMO", "BOXEO", "GOLF"]
    },
    lenguajes: {
        emoji: "💻",
        palabras: ["REACT", "VUE", "ANGULAR", "HASKELL", "PYTHON", "JAVASCRIPT"]
    },
    dispositivos: {
        emoji: "📱",
        palabras: ["TELEVISOR", "LAPTOP", "TABLET", "MOUSE", "IMPRESORA", "SMARTWATCH"]
    },
    ropa: {
        emoji: "👗",
        palabras: ["CAMISA", "PANTALON", "CHAQUETA", "FALDA", "ZAPATOS", "SANDALIAS"]
    },
    muebles: {
        emoji: "🛋️",
        palabras: ["SOFA", "MESA", "SILLA", "CAMA", "ESTANTE", "ARMARIO"]
    },
    transporte: {
        emoji: "🚗",
        palabras: ["AUTOMOVIL", "BICICLETA", "AVION", "BARCO", "TREN", "MOTO"]
    },
    utiles: {
        emoji: "📓",
        palabras: ["LAPIZ", "CARPETA", "CUADERNO", "BOLIGRAFO", "GOMA", "REGLA"]
    },
    profesiones: {
        emoji: "👨‍⚕️",
        palabras: ["MEDICO", "INGENIERO", "DOCENTE", "PILOTO", "ABOGADO", "ARTISTA"]
    },
    hobbies: {
        emoji: "🎨",
        palabras: ["PINTAR", "CANTAR", "BAILAR", "LEER", "CORRER", "EJERCITAR"]
    }
};

export const TAMANO_CUADRICULA = 10;
export const TIEMPO_INICIAL = 60;
export enum Direccion {
    Horizontal = 0,
    Vertical = 1,
    Diagonal = 2,
}