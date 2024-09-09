"use client";
import Faqs from "./components/Faqs";
import MarqueeHome from "./components/marquee";
import MouseGif from "./components/MouseGif";
import { Video } from "./components/Video";
import Image from "next/image";
import Link from "next/link";
import MarqueeHomeMobile from "./components/MarqueeMobile";
import MobileCarousel from "./components/MobileCarousel";


export default function Home() {

  const images= [
    {url: "https://res.cloudinary.com/dbohxop49/image/upload/v1725211083/homeMoble1_lbtuiq.jpg"},
    {url: "https://res.cloudinary.com/dbohxop49/image/upload/v1725211083/homeMobile2_hwfl3h.jpg"},
    {url: "https://res.cloudinary.com/dbohxop49/image/upload/v1725211082/homeMobile3_rg2n7i.jpg"}

  ]
  return (
    <>
    <div className="homeMobile">
      <div className="videoContainer">
        <Video url="https://res.cloudinary.com/dbohxop49/video/upload/v1724556947/estudio_cw6x13_mymjol.mp4" />
      </div>

      <div className="marqueeContainer">
        <MarqueeHomeMobile textMarquee={"ENFOCA.  CAPTURA.  INSPIRA"} />
     </div>
     <div style={{display: 'flex', alignItems: 'center'}}>
     <div className="baliEstudioText baliMobiletextHome">
       <div className="txtContainer">
         <p className="title paddingParagraph">BALI ESTUDIO</p>
         <p className="paragraph paddingParagraph" style={{fontWeight: '500'}}>
           {`Un Espacio sofisticado para\nproyectos extraordinarios.\n\nSu arquitectura europea confiere al\nespacio una atmósfera sofisticada,\nideal para clientes que buscan un\nentorno distinguido para sus\nproyectos.`}
         </p>
         <Link href={"/conocebali"}>
           <div className="btnWhiteStyle paragraph paddingParagraph">Conoce más</div>
         </Link>
       </div>
     </div>
     <div style={{display: 'flex', width: '100%', backgroundColor: 'black', zIndex: '-1'}}>
     <MobileCarousel images={images}/>
     </div>
     </div>
     <div className="marqueeContainer">
     <MarqueeHomeMobile textMarquee={"NUESTROS  SERVICIOS"}/>
     </div>
     <div style={{display: 'block', position: 'relative'}}>
      <div className="textEspaciosHomeMobileContainer">
      <p className="titleMobile" style={{fontWeight: '900', fontSize: '3rem'}}>{`EN NUESTROS\nESPACIOS\nPODRAS HACER`}</p>
      </div>
      <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1725211082/homeMobile4_xjrcjq.jpg"} fill alt="Produccion Bali" className="imgHomeEspaciosMobile" style={{zIndex: '-1'}}/>
     </div>
     <div className="detailesHomeMobile">
      <section className="sectionTxtMobile"> 
        <p className="titleMobileHome">{`SESIONES\nFOTOGRAFICAS`}</p>
        <p className="paragraph">{`PRODUCTO\nLOOKBOOK\nE COMMERCE\nEDITORIALES DE MODA\nCAMPAÑAS PUBLICITARIAS`}</p>
      </section>
      <section className="sectionTxtMobile"> 
        <p className="titleMobileHome">{`EVENTOS`}</p>
        <p className="paragraph">{`CASTING\nWORKSHOP\nSHOW ROOM\nFASHION SHOW\nMASTER CLASS\nEVENTOS EMPRESARIALES`}</p>
      </section>
      <section className="sectionTxtMobile"> 
        <p className="titleMobileHome">{`PRODUCCIONES\nAUDIOVISUALES`}</p>
        <p className="paragraph">{`REELS\nSOCIALES\nFASHION FILMS\nGRABACION DE VIDEOS\nCONTENIDO PARA REDES`}</p>
      </section>
      <section className="sectionTxtMobile"> 
        <p className="titleMobileHome">{`TAMBIEN\nTE OFRECEMOS`}</p>
        <p className="paragraph">{`ESTILISMO\nY PRODUCCION DE MODA`}</p>
      </section>
     </div>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '3rem'}}>
      <p className="titleMobile" style={{marginBottom: '1rem', position: 'relative'}}>¿Tenés dudas?</p>
    <Link href={"/preguntasfrecuentes"}><p className="paragraph paddingParagraph btnStyle">Te ayudamos a resolverlas</p></Link>  
    </div>
    </div>

    <div className="homeDesktop">
      <div className="videoContainer">
        <Video url="https://res.cloudinary.com/dbohxop49/video/upload/v1724556947/estudio_cw6x13_mymjol.mp4"/>
      </div>
      <MouseGif />
      <div className="marqueeContainer">
        <MarqueeHome textMarquee={"ENFOCA.  CAPTURA.  INSPIRA"} />
      </div>
      <section className="estudios">
        {/* Studio section
        Renders a section showcasing the studio, featuring an image and text
       */}
        <div className="baliEstudioText" style={{zIndex: '1'}}>
          <div className="txtContainer txtSticky">
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

        <div className="baliEstudioText " style={{zIndex: '2'}}>
          <p className="paragraph txtSticky">
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
        <div className="baliEstudioText" style={{zIndex: '3'}}>
          <div className="txtSticky">
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
        <div className="baliEstudioPictures">
          <Image
            src={`https://res.cloudinary.com/dbohxop49/image/upload/v1724560603/home3_c5aurv.jpg`}
            alt="Nuestro Estudio"
            fill
            className="homeImgBali"
          />
        </div>
        <div className="baliEstudioText">
          <div className="txtSticky">
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
          <div className="txtSticky">
            <p className="title">{`PRODUCCIONES\nAUDIOVISUALES`}</p>
            <p className="paragraph">{`REELS\nSOCIALES\nFASHION FILMS\nGRABACIÓN DE VIDEOS\nCONTENIDO PARA REDES SOCIALES`}</p>
          <div className="secondParagraph">
            <p className="title">{`EVENTOS                 `}</p>
            <p className="paragraph">{`CASTING\nWORKSHOP\nSHOW ROOM\nFASHION SHOW\nMASTER CLASS\nEVENTOS EMPRESARIALES`}</p>
          </div>
        </div>
          </div>
        {/* -------------------------------------- */}
        <div className="baliEstudioPictures baliEstudioImg" >
          <Image
            src={`https://res.cloudinary.com/dbohxop49/image/upload/v1724560603/home4_etqcvr.jpg`}
            alt="Nuestro Estudio"
            fill
            className="homeImgBali"
          />
        </div>
        <div className="baliEstudioText">
          <div className="txtSticky">
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
    </>
  );
}
