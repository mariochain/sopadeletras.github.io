import React from "react";

const AnimacionGana = () => {
    const styles = {
        checkmarkCircle: {
            width: '80px',
            height: '80px',
            display: 'inline-block',
            strokeWidth: 2,
            stroke: '#4CAF50',
            strokeMiterlimit: 10,
            marginBottom: '10px',
        },
        checkmark: {
            width: '80px',
            height: '80px',
            display: 'block',
            strokeWidth: 2,
            stroke: '#4CAF50',
            strokeMiterlimit: 10,
            strokeDasharray: 166,
            strokeDashoffset: 166,
            animation: 'stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards',
            margin: 'auto',
        },
        checkmarkPath: {
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
            <div style={styles.checkmarkCircle}>
                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" style={styles.checkmark}>
                    <circle cx="26" cy="26" r="25" fill="none" style={styles.checkmarkCircle} />
                    <path d="M14 27l7 7 16-16" fill="none" style={styles.checkmarkPath} />
                </svg>
            </div>
        </>
    );
};

export default AnimacionGana;