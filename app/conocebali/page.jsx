"use client";
import MouseGif from "../components/MouseGif";
import { Video } from "../components/Video";
import Image from "next/image";

export default function Conoce() {
  return (
    <div>
      <div className="videoContainerConoceBali">
        <Video url="https://res.cloudinary.com/dbohxop49/video/upload/v1724556947/estudio_cw6x13_mymjol.mp4" />
        <MouseGif />
      </div>
      <section className="conoceBaliContainer">
        <div>
          <p className="paragraph conoceParagraph">
            {`Situado en el corazón de Buenos Aires, en la icónica intersección de la Avenida Santa Fe y 9 de Julio, se erige como un símbolo de glamour y elegancia. Su arquitectura europea confiere al espacio una atmósfera sofisticada, ideal para clientes que buscan un entorno distinguido para sus proyectos. Sin embargo, `}<b>Bali</b>{` no es solamente un estudio; es un lugar donde invitamos a la creatividad, la calidad y el trabajo en equipo.`}
          </p>
        </div>
        <div className="conoceBaliImgContainer">
          <Image
            src={
              "https://res.cloudinary.com/dbohxop49/image/upload/v1726079076/conocebali1_gxpkr2.jpg"
            }
            alt="Studio"
            fill
            className="imgConoceBali"
          />
        </div>
        <div>
          <p className="paragraph conoceParagraph">
            {`Concebido como un lugar versátil, `}<b>Bali</b>{` está pensado para recibir todo tipo de producciones audiovisuales. Con un diseño meticuloso y una especial atención a los detalles, cada rincón del estudio es funcional y estéticamente agradable, ofreciendo a los creativos un espacio perfecto para dar vida a sus ideas. Además, contamos con equipos modernos que brindan todas las herramientas técnicas necesarias para realizar contenido audiovisual de excelente calidad.\n\nEsta combinación asegura resultados excepcionales que cumplen con las expectativas más exigentes del rubro.`}
          </p>
        </div>
      </section>


        <div className="conocePhotosContainer">
          <div className="conocePhoto2Container">
            <div className="video-background">
              <video id="background-video" autoPlay loop muted>
                <source
                  src="https://res.cloudinary.com/dbohxop49/video/upload/v1724555658/videoConocebali_nuf6ik.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="imgContainerModel">
              <Image
                src={
                  "https://res.cloudinary.com/dbohxop49/image/upload/v1725981218/conocebali2_-_copia_whxymj.jpg"
                }
                alt="photo"
                fill
                className="conocePhoto2"
              />
              <div className="overlay overlayMobile">
                <div className="conocePhotoTxtContainer"> 
                <p className="conocePhotoTxt"><strong>CHEERY BOMB </strong><a
                    href="https://www.instagram.com/bfstoreok/"
                    target="_blanck"
                    className="creditsPhoto"
                    >{" "}
                    @bfstoreok
                  </a></p>

                <p className="conocePhotoTxt">
                <strong>Modelo:  </strong>
                  <a
                    href="https://www.instagram.com/barbieeferrari/"
                    target="_blanck"
                    className="creditsPhoto"
                    >
                    @barbieeferrari
                  </a>
                </p>
                <p className="conocePhotoTxt">
                 <strong>Make up & Peinado:  </strong>
                  {" "}
                  <a
                    href="https://www.instagram.com/soficosta.makeup/"
                    target="_blanck"
                    className="creditsPhoto"
                    >
                    @soficosta.makeup
                  </a>{" "}
                  /{" "}
                  <a
                    href="https://www.instagram.com/emmabarrioshair/"
                    target="_blanck"
                    className="creditsPhoto"
                    >
                    @emmabarrioshair
                  </a>
                </p>
                <p className="conocePhotoTxt">
                  <strong>Fotografos:  </strong>
                  {" "}
                  <a
                    href="https://www.instagram.com/magencia.mkt/"
                    target="_blanck"
                    className="creditsPhoto"
                    >
                    @magenciamkt
                  </a>{" "}
                  /{" "}
                  <a
                    href="https://www.instagram.com/marbellendier/"
                    target="_blanck"
                    className="creditsPhoto"
                    >
                    @marbellendier
                  </a>{" "}
                  /{" "}
                  <a
                    href="https://www.instagram.com/maratkinson_/"
                    target="_blanck"
                    className="creditsPhoto"
                    >
                    @maratkinson_
                  </a>
                </p>
                    </div>
              </div>
            </div>
          </div>
        </div>



      <section className="conoceBaliContainer2">
          <div className="studio2Container">
            <Image
              src={
                "https://res.cloudinary.com/dbohxop49/image/upload/v1724603492/conocebali3_kq5vsy.jpg"
              }
              alt="Studio 2"
              fill
              className="imgConoceBali"
            />
          </div>
          <div>
            <p className="paragraph conoceParagraph">
              {`El pilar fundamental de `}<b>Bali</b>{` es la comodidad dentro de nuestras instalaciones. Nos dedicamos a garantizar la máxima calidad en cada detalle, asegurando un ambiente propicio para la creatividad y la eficiencia.\n\nCon una gran vocación de servicio, nuestro equipo está siempre dispuesto a asistir a nuestros clientes en cada etapa de su proyecto, brindando soporte y soluciones personalizadas.\n\nEn `}<b>Bali</b>{`, creemos que un ambiente inspirador es crucial para el éxito de cualquier proyecto.Por ello, hemos diseñado nuestro espacio no solo para ser visualmente impactante, sino también para ser altamente funcional y adaptable a las necesidades específicas de cada producción.\n\nLa combinación de elegancia, versatilidad y tecnología de punta hace de `}<b>Bali</b>{` el lugar ideal para aquellos que desean potenciar sus obras y alcanzar resultados sorprendentes.`}
            </p>
          </div>
      </section>
    </div>
  );
}
