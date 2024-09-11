'use client'

import SetDuoReserve from "../components/setDuoReserve";
import SetPalaceReserve from "../components/SetPalacereserve";


export default function Reservas () {

    return  (
        <div className="reservasHero">
          <div className="reservasIntroContainer">
          <p className="subTitle paddingParagraph introPadding titleContactoMobile">{`La familia\nBali Estudio\nte espera!`}</p>
          <p className="paragraph paddingParagraph">{`Bienvenidos a nuestro programador de sesiones automático.\nAquí podrás reservar el tiempo que necesites para realizar tus\nproducciones en nuestros espacios`}</p>
          <p><span className="letraChica">letra chica de las reservas</span></p>
          </div>
          <div className="reservasContainer">
            <SetPalaceReserve />
          </div>
          <div>
            <SetDuoReserve />
          </div>


        </div> 
   
    )
}