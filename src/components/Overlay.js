import React, { useEffect, useRef } from 'react';

const Overlay = () => {
    const overlayElement = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            overlayElement.current.classList.add('hidden');
        }, 5000);
    }, []);

    return (
        <div ref={overlayElement} className="overlay">
            <div className="logo">
            <span className="logo-letter">V.</span>
            <span className="logo-letter">E.</span>
            <span className="logo-letter">R.</span>
            <span className="logo-letter">
                <span className="logo-letter-reverse">V</span>
                .
            </span>
            </div>
        </div>
    );
}

export default Overlay;
