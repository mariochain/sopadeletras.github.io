import React from "react";

const AnimacionError = () => {
    const styles = {
        errorCircle: {
            width: '80px',
            height: '80px',
            display: 'inline-block',
            strokeWidth: 2,
            stroke: '#F44336', // Rojo para el error
            strokeMiterlimit: 10,
            marginBottom: '10px',
        },
        errorMark: {
            width: '80px',
            height: '80px',
            display: 'block',
            strokeWidth: 2,
            stroke: '#F44336', // Rojo para el error
            strokeMiterlimit: 10,
            strokeDasharray: 166,
            strokeDashoffset: 166,
            animation: 'stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards',
            margin: 'auto',
        },
        errorPath: {
            transformOrigin: '50% 50%',
            strokeDasharray: 48,
            strokeDashoffset: 48,
            animation: 'stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.6s forwards',
        },
        keyframes: `
            @keyframes stroke {
                100% {
                    stroke-dashoffset: 0;
                }
            }
        `
    };

    return (
        <>
            <style>{styles.keyframes}</style>
            <div style={styles.errorCircle}>
                <svg className="errormark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" style={styles.errorMark}>
                    <circle cx="26" cy="26" r="25" fill="none" style={styles.errorCircle} />
                    {/* "X" Path for error */}
                    <path d="M16 16 L36 36 M36 16 L16 36" fill="none" style={styles.errorPath} />
                </svg>
            </div>
        </>
    );
};

export default AnimacionError;