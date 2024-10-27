import Image from "next/image";
import Link from "next/link";
export default function Reservas() {
  return (
    <div className="bookingSetPalacePage">
      <div className="bookingSetPalaceContainer">
        <div className="setDuoImgReserveContainer">
          <Image
            src={
              "https://res.cloudinary.com/dbohxop49/image/upload/v1726020599/setDuo_yy2rwe.jpg"
            }
            alt="setPalace"
            fill
            className="setDuoImg"
          />
          <div className="overlayImgReservas">
            {" "}
            <p className="setsOverlayTxt">SET DUO</p>{" "}
          </div>
        </div>
        <div className="paragraph marginParagraphReserve ">
          <h4 className="paragraph marginParagraphReserve ">
            <strong>Ideal para fotos | entrevistas | videos</strong>
          </h4>
          <p className="paragraph">{`El valor del alquiler incluye:`}</p>
          <p className="paragraph marginParagraphReserve">{`• Bajada de infinito color blanco, verde o gris.\n• Uso del espacio especificado en la reserva\n• 3 flashes con accesorios`}</p>
          <p className="paragraph marginParagraphReserve">
            Otros accesorios/espacios pueden tener costo adicional, por favor{" "}
            <a
              href="https://wa.me/+5491154171668?text=Hola! Tengo una consulta sobre el Set DUO"
              style={{ color: "blue", textDecoration: "unset" }}
              target="_blank"
            >
              consúltenos
            </a>
          </p>
          <div className="setPalaceAzulMinimo marginParagraphReserve">
            <img src="/clockRegular.svg" alt="clock" className="clockIcon" />
            <p className="smallParagraph">Tiempo mínimo de reserva: 2 hs.</p>
          </div>
          <div className="setPalaceBtns">
            <button className="btnStyle"> <Link href={"/reservas/duo"}>Reservar</Link> </button>
          </div>
        </div>
      </div>

      <div className="bookingSetPalaceContainer">
            <div className="setPalaceImgReserveContainer">
              <Image
                src={
                  "https://res.cloudinary.com/dbohxop49/image/upload/v1726020601/05-setPalace2_wgzytw.png"
                }
                alt="setPalace"
                fill
                className="setPalaceAzulImg"
              />
              <Image
                src={
                  "https://res.cloudinary.com/dbohxop49/image/upload/v1726020597/setAzul-02_w5bamb.jpg"
                }
                alt="setPalace"
                fill
                className="setPalaceAzulImg"
              />
            <div className="overlayImgReservas"> <p className="setsOverlayTxt">SETS PALACE & AZUL</p> </div>
            </div>
            <div className="setPalaceDetailsContent setPalaceText">
              <h4 className="paragraph marginParagraphReserve">
              <strong>Ideal para fotos | entrevistas | videos </strong> 
              </h4>
              <p className="paragraph">{`El valor del alquiler incluye:`}</p>
              <p className="paragraph marginParagraphReserve">{`• Bajada de infinito color blanco, verde o gris.\n• Uso del espacio especificado en la reserva\n• 3 flashes con accesorios`}</p>
              <p className="paragraph marginParagraphReserve">
                Otros accesorios/espacios pueden tener costo adicional, por
                favor <a href="https://wa.me/+5491154171668?text=Hola! Tengo una consulta sobre el Set Palace / Azul" style={{color: 'blue', textDecoration: 'unset'}} target="_blank">consúltenos</a>
              </p>
              <div className="setPalaceAzulMinimo marginParagraphReserve">
              <img src="/clockRegular.svg" alt="clock" className="clockIcon" />
              <p className="smallParagraph">Tiempo mínimo de reserva: 2 hs.</p> 
              </div>
              <div className="setPalaceBtns">
                
                  <button  className="btnStyle  ">
                    <Link href={"/reservas/palace"}>Reservar</Link>
                  </button>  
      
              </div>
            </div>
          </div>
    </div>
  );
}
