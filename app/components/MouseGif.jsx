'use client'
import { useState, useEffect } from "react";
import styles from '../styles/MouseGif.module.css';
import Image from "next/image";


export default function MouseGif() {

    const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    return(
        <div className={`${styles.mouseGifContainer} ${hidden ? styles.hidden : ''}`}>
        <Image src="https://res.cloudinary.com/dbohxop49/image/upload/v1724556044/mouseGif2_lrdnll.gif" alt="Mouse GIF" className='mouseGifOnly' fill unoptimized/>
      </div>
    )
}