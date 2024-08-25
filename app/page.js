"use client";
import Faqs from "./components/Faqs";
import MarqueeHome from "./components/marquee";
import MouseGif from "./components/MouseGif";
import { Video } from "./components/Video";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="videoContainer">
        <Video url="https://res.cloudinary.com/dbohxop49/video/upload/v1724556947/estudio_cw6x13_mymjol.mp4" />
      </div>
      <MouseGif />
      <div className="marqueeContainer">
        <MarqueeHome textMarquee={"ENFOCA.  CAPTURA.  INSPIRA"} />
      </div>
      <section className="estudios">
        {/* Studio section
        Renders a section showcasing the studio, featuring an image and text
       */}
        <div className="baliEstudioText ">
          <div className="txtContainer">
            <p className="title paddingParagraph">BALI ESTUDIO</p>
            <p className="paragraph paddingParagraph">
              {`Un Espacio sofisticado para proyectos\nextraordinarios.\n\nSu arquitectura europea confiere al\nespacio una atmósfera sofisticada,\nideal para clientes que buscan un\nentorno distinguido para sus\nproyectos.`}
            </p>
            <Link href={"/conocebali"}>
              <div className="btnStyle paragraph paddingParagraph">Conoce más</div>
            </Link>
          </div>
        </div>
        <div className="baliEstudioPictures baliEstudioImg">
          <Image
            src={
              "https://res.cloudinary.com/dbohxop49/image/upload/v1724560070/home1_yfikxh.jpg"
            }
            alt="Nuestro Estudio"
            fill
            className="homeImgBali"
          />
        </div>
        {/* second */}

        <div className="baliEstudioText ">
          <p className="paragraph">
            {`Hemos diseñado nuestro espacio no\nsolo para ser visualmente impactante,\nsino  también para ser altamente funcional\ny adaptable a las necesidades específicas\nde cada cliente.\n\nLa combinación de elegancia, versatilidad\ny tecnología hacen de Bali Estudio el lugar\nideal.`}
          </p>
        </div>
        <div className="baliLogoWhiteContainer">
          <Image
            src={
              "https://res.cloudinary.com/dbohxop49/image/upload/v1724556042/logoBaliWhite_i64vv4.png"
            }
            alt="logo"
            fill
            className="baliLogoCenter"
          />
        </div>

        {/* third */}
        <div className="baliEstudioText">
          <div>
            <p className="paragraph paddingParagraph">
              {`Con gran vocación de servicio,\nnuestro equipo está siempre dispuesto\na asistir a nuestros clientes en cada\netapa de su proyecto, brindando soporte\ny soluciones personalizadas.\n`}
            </p>
            <p className="paragraph">
              ¡Vení a Conocernos y tener una Baliexperience!
            </p>
          </div>
        </div>
        <div className="baliEstudioPictures baliEstudioImg">
          <Image
            src={`https://res.cloudinary.com/dbohxop49/image/upload/v1724560377/home4_lz2hpx.jpg`}
            alt="Nuestro Estudio"
            fill
            className="homeImgBali baliImgBlock"
          />
        </div>
      </section>
      <div className="marqueeContainer">
        <MarqueeHome
          textMarquee={
            "                    NUESTROS                    \n                    SERVICIOS                    "
          }
        />
      </div>
      <section className="servicios">
        <div>
          <Image
            src={`https://res.cloudinary.com/dbohxop49/image/upload/v1724560603/home3_c5aurv.jpg`}
            alt="Nuestro Estudio"
            fill
            className="homeImgBali"
          />
        </div>
        <div className="baliEstudioText ">
          <div>
            <p className="title">{`SESIONES    \nFOTOGRÁFICAS `}</p>
            <p className="paragraph">
              {`PRODUCTO\nE COMMERCE\nEDITORIALES DE MODA\nLOOKBOOK\nCAMPAÑAS PUBLICITARIAS           `}
            </p>
          </div>
        </div>

        {/* -------------------------------------- */}
        <div className="extraTitleContainer">
          <p className="extraTitle">
            {`EN\nNUESTROS\nESPACIOS\nPODRAS\nHACER:`}
          </p>
        </div>
        <div className="baliEstudioText dobleTxtBox">
          <div>
            <p className="title">{`PRODUCCIONES\nAUDIOVISUALES`}</p>
            <p className="paragraph">{`REELS\nSOCIALES\nFASHION FILMS\nGRABACIÓN DE VIDEOS\nCONTENIDO PARA REDES SOCIALES`}</p>
          </div>
          <div>
            <p className="title">{`EVENTOS                 `}</p>
            <p className="paragraph">{`CASTING\nWORKSHOP\nSHOW ROOM\nFASHION SHOW\nMASTER CLASS\nEVENTOS EMPRESARIALES`}</p>
          </div>
        </div>
        {/* -------------------------------------- */}
        <div className="baliEstudioImg">
          <Image
            src={`https://res.cloudinary.com/dbohxop49/image/upload/v1724560603/home4_etqcvr.jpg`}
            alt="Nuestro Estudio"
            fill
            className="homeImgBali"
          />
        </div>
        <div className="baliEstudioText">
          <div>
            <p className="title">{`AMAMOS LA MODA`}</p>
            <p className="paragraph">
              {`ESTILISMO\nPRODUCCIÓN DE MODA Y EVENTOS`}
            </p>
          </div>
        </div>

      </section>
      
        {/* --------------------------------- */}

      <div className="marqueeContainer">
        <MarqueeHome
          textMarquee={"FAQ              "}
          textMarquee2={"PREGUNTAS \nFRECUENTES "}
        />
      </div>
      <Faqs />
    </div>
  );
}
