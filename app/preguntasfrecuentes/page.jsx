'use client'
import Image from "next/image";
import { useState } from "react";



export default function PreguntasFrecuentes(){

    const questions = [
        {id: 1, question: "¿ARMAN SETS A MEDIDA?"},
        {id: 2, question: "¿QUÉ INCLUYE LA RESERVA?"},
        {id: 3, question: "¿CONTAMOS CON FONDO INFINITO?"},
        {id: 4, question: "¿CUÁL ES EL HORARIO DEL ESTUDIO?"},
        {id: 5, question: "¿PUEDO UTILIZAR LOS ESPACIOS DE OTROS SETS?"},
        {id: 6, question: "¿PUEDO REALIZAR CONTENIDO CON MI TELÉFONO?"},
        {id: 7, question: "¿CUÁL ES EL TIEMPO MÍNIMO PARA ALQUILAR EL ESTUDIO?"},
        {id: 8, question: "¿PUEDEN ENCARGARSE DE LA PRODUCCION DE MIS FOTOS?"},
        {id: 9, question: "¿CUÁL ES EL PROCEDIMIENTO PARA REALIZAR UNA RESERVA?"},
        {id: 10, question: "¿SE PODRÍA CHUSMEAR EL ESTUDIO ANTES DE LA HORA RESERVADA?"},
    ]

    const options = [
        { id: 1, answer: "Sí. Podemos armarte todo lo que necesites" },
        { id: 2, answer:"• Set seleccionado por ti\n• Flashes\n• Bajada de infinito (colores seleccionados)\n• Mobiliario\n• Accesorios de iluminación\n• Nuestra asistencia para la manipulación de los equipos"},
        { id: 3, answer:"Si, contamos con fondo infinito de cartulina en diversos colores"},
        { id: 4, answer: "Nuestro horario es 24 horas." },
        { id: 5, answer: "Si, siempre y cuando no estén en uso o reservados" },
        { id: 6, answer:"Es un SI total y te ayudamos a que te quede genial"},
        { id: 7, answer: "2 horas" },
        { id: 8, answer: "Cuando lo desees te podemos ayudar con el armado del\nEstilismo, la puesta en escena, manejo de los equipos de\niluminación,contratación de fotógrafos, maquilladores,\nfilmakers y cualquier otro requerimiento que tengas"},
        { id: 9, answer: "Tienes dos opciones:\n\n• Lo puedes hacer desde nuestra web en RESERVAS\n• ¡Escríbenos! Cuéntanos cuándo nos quieres visitar y,\n   con el 50% de anticipo, ¡te lo reservamos! Un día antes\n   te mandamos un mensaje de confirmación ¡y listo!\n\n  ¡Nos vemos pronto!"},
        { id: 10, answer: "¡Claro!!!! Puedes ingresar a nuestras instalaciones\ncon 15 min de anticipación. Al set si puedes ingresar\nsólo en el horario reservado.\n\nAsí que te esperamos y nos tomamos un café."},
      ];
      const [optionSelected, setOptionSelected] = useState(null);
    
      const handleClick = (id)=>{
          setOptionSelected(id)
      }

      if(optionSelected){
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll');
      }
    
      const Answer = ({ option }) => (
        <>
            <div className="answerTxt answerTxtMobile">
            <div className="closeModalAnswer">
            <span onClick={() => handleClick(null)} className="closModalMobileX">x</span>
            </div>
            <p >{options.map((opt) => option === opt.id && opt.answer )}</p>
        </div>
        </>
      );
    
      return (
        <>
        <div className="notFound" style={{display: 'flex', margin: '400px', justifyContent: 'center', alignContent: 'center', fontSize: '3rem', fontWeight: '600'}}>
            <div>Página no disponible en esta pantalla</div>
        </div>
        <div className="preguntasFrecuentes" style={{display: 'none'}}>
        <div className="fqsMobileContainer">
            <div className="subtitleMobile">Preguntas Frecuentes</div>
            <Image src={"https://res.cloudinary.com/dbohxop49/image/upload/v1725118719/questionIcon_zrzqv6.png"} fill className="questionIcon" alt="questionIcon"/>
            </div>
            <div className="fqsMobile">
                {questions.map((question) =>(
                    <div key={question.id} className={`fqsMobileItem ${optionSelected === question.id ? 'selected' : ''}`}>
                <p className="questionMobileTxt">{question.question}</p> 
                <span  onClick={() => handleClick(question.id)} className="plusQuestion">+</span>
                </div>))}
            </div>
             {optionSelected && <div className="overlayAnswer" onClick={() => handleClick(null)}></div>} 
             {optionSelected && <div className="answers"> <Answer option={optionSelected}/></div> } 
        </div >
                    </>
      );

}