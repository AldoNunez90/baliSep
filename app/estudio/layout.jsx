"use client";
import Image from "next/image";


export default function Estudio({children}) {

  return (
    <>
    <div className="warningDesktop" style={{display: 'none'}}> Este elemento no está disponible para esta pantalla</div>
    <div className="equiposDesktop">
      <div className="imgContainer">
        <Image
          src={"https://res.cloudinary.com/dbohxop49/image/upload/v1724605349/estudioImg1_nqbt6z.jpg"}
          alt="Estudio"
          fill
          className="estudioImg"
        />
      </div>
      {children}
    </div>
    </>
  );
}
