'use client'



export default function ReservasRoot ({children}) {

    return  (
        <div className="reservasHero">
          <div className="reservasIntroContainer">
          <p className="subTitle paddingParagraph introPadding titleContactoMobile">{`La familia\nBali Estudio\nte espera!`}</p>
          <p className="paragraph paddingParagraph">{`Bienvenidos a nuestro programador de sesiones automático.\nAquí podrás reservar el tiempo que necesites para realizar tus\nproducciones en nuestros espacios`}</p>
          <p><span className="letraChica">letra chica de las reservas</span></p>
          </div>
          <div className="reservasContainer">
            {children}
          </div>


        </div> 
   
    )
}