'use client'
import { useState, useEffect } from "react";
import styles from '../styles/MouseGif.module.css';
import Image from "next/image";

export default function MouseGif() {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        // Cargar el estado guardado en localStorage cuando se monta el componente
        const savedHiddenState = localStorage.getItem('mouseGifHidden');
        if (savedHiddenState === 'true') {
            setHidden(true);
        }

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setHidden(true);
                // Guardar el estado en localStorage
                localStorage.setItem('mouseGifHidden', 'true');
            } else {
                setHidden(false);
                // Guardar el estado en localStorage
                localStorage.setItem('mouseGifHidden', 'false');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${styles.mouseGifContainer} ${hidden ? styles.hidden : ''}`}>
            <Image 
                src="https://res.cloudinary.com/dbohxop49/image/upload/v1724556044/mouseGif2_lrdnll.gif" 
                alt="Mouse GIF" 
                className='mouseGifOnly' 
                fill 
                unoptimized
            />
        </div>
    );
}
