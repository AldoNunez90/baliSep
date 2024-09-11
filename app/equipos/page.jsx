"use client";

import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Image from "next/image";

export default function Equipos() {
  const sectionRef = useRef();

  const downloadPdf = () => {
    const section = sectionRef.current;
    html2canvas(section).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("download.pdf");
    });
  };

  return (
    <div className="equiposContainer">
      <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1725984351/setsIntro_jljtaf.jpg"} fill alt="setsIntro" className="imgSetsIntro"/>
      <section className="equipoDetailsMobile">         
        <div className="iluminacionTxt">
            <p className="title">ILUMINACIÓN</p>
            <p className="paragraph">
              {`•  2 FLASH VISICO 1000W\n•  EMISOR DISPARADOR RADIO P/FLASH VISICO\n•  FLASH GODOX SK 300 II\n•  FLASH GODOX SK 400 II\n•  CONTROL REMOTO INALÁMBRICO Y DISPARADOR GODOX\n•  LUZ CONTINUA LED BI COLOR GODOX 150 W\n•  3 PANELES LED VISICO 50W\n•  2 PANELES LED PHOPIK 10W\n•  JIRAFA GODOX 1.80 MTS\n•  JIRAFA DE ACERO INOX C/BRAZO 3 MTS\n•  2 SOPORTE PORTA FONDO PROFESIONAL 3 MTS\n•  2 SOPORTE PORTA FONDO EN “T”\n•  2 SOPORTE PANTALLA REFLECTORA EXTENSIBLE`}
            </p>
            <a href="/iluminacion.pdf" download="Iluminacion.pdf">
              <button onClick={downloadPdf} className="btnMobile paragraph">
                DESCARGAR LISTADO
              </button>
            </a>
        </div>

        <div className="equiposImgContainerMobile">
          <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1725934354/equiposD_ofxkfu.png"} fill alt="Equipos" className="equiposImgMobile" />
        </div>
      </section>
      <section className="equipoDetailsMobile">
      <div className="equiposImgContainerMobile">
          <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1725934353/equiposC_o1asal.png"} fill alt="Equipos" className="equiposImgMobile"  />
        </div>

        <div className="modificadoresTxtContainer">
            <p className="title">MODIFICADORES</p>
            <p className="paragraph">{`•  SOFT BOX STRIP VISICO 35X140 CM\n•  SOFT BOX STRIP VISICO 20X90 CM\n•  2 SOFT BOX 70X100 CM\n•  SOFT BOX OCTO BOX 95 CM CON GRILLA\n•  SOFT BOX OCTO BOX 170 CM CON GRILLA\n•  EYELIGTHER 180*60 CM\n•  5 EN 1 DE 110 CM\n•  BARNDOOR CON FILTROS DE COLOR\n•  3 SNOOT CON FILTROS DE COLORES\n•  SOMBRILLA GODOX TRANSLÚCIDOS 84 CM\n•  SOMBRILLA PLATEADA GODOX 101 CM\n•  BERAUTY DISCH\n•  SNOOT OPTICO C/ LENTE INCORPORADO`}</p>
            <p className="paragraph">
              <small> {`   15 FORMAS Y 5 GELES DE COLORES`}</small>
            </p>
            <a href="/modificadores.pdf" download="Modificadores.pdf">
              <button onClick={downloadPdf} className="btnMobile paragraph">
                DESCARGAR LISTADO
              </button>
            </a>
        </div>

        
      </section>
      <section className="equipoDetailsMobile">
        <div className="equiposCenterText">
            <p className="title">FONDOS INFINITOS</p>
            <p className="paragraph">
              {`•  BLANCO\n•  NEGRO\n•  GRIS \n•  VERDE / CHROMA KEY`}{" "}
            </p>
        </div>

        <div className="equiposImgContainerMobile">
          <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1725934354/equiposA_ndp3cy.png"} fill alt="Equipos" className="equiposImgMobile"/>
        </div>
      </section>
      <section className="equipoDetailsMobile">
        <div className="equiposImgContainerMobile">
          <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1725934354/equiposB_vodfc2.png"} fill alt="Equipos" className="equiposImgMobile"/>
        </div>

          <div className="equiposCenterText">
            <p className="title">COMPLEMENTARIOS</p>
            <p className="paragraph">
              {`•  BASE 360 DE 70 CM DE DIÁMETRO\n•  PROYECTOR LED 7000 L FULL HD 4K\n•  MONITOR DE 32" SOPORTE FIJO \n•  MONITOR DE 32" SOPORTE MÓVIL`}{" "}
            </p>
            <a href="/complementarios.pdf" download="complementarios.pdf">
              <button onClick={downloadPdf} className="btnMobile paragraph">
                DESCARGAR LISTADO
              </button>
            </a>
        </div>

      </section>
      <section className="equipoDetailsMobile">
          <div className="equiposCenterText">
            <p className="title">{`UTILERÍA\n& ESCENOGRAFÍA`}</p>
            <p className="paragraph">{`•  ARCADA 3D\n•  VENTILADOR\n•  PAPEL MYLAR\n•  TELGOPOR BLANCO 2 MTS X 1 MTS\n•  TELA BLACK OUT\n•  SILLAS\n•  SILLONES\n•  FLOREROS\n•  ENREDADERAS ARTIFICIALES\n•  CUADROS\n•  LUCES`}</p>
            <a href="/utileria.pdf" download="utileria.pdf">
              <button onClick={downloadPdf} className="btnMobile paragraph">
                DESCARGAR LISTADO
              </button>
            </a>
        </div>

        <div className="equiposImgContainerMobile">
          <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1725934354/equiposA_ndp3cy.png"} fill alt="Equipos" className="equiposImgMobile"/>
        </div>
      </section>
    </div>
  );
}
