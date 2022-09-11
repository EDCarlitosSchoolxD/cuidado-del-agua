import React from 'react'
import { Footer } from '../components/Footer/Footer'
import { Navegacion } from '../components/nav/Navegacion'
import { Next } from '../components/Next/Next'
import { Previous } from '../components/Previous/Previous'
import { TxtImg } from '../components/TxtImg/TxtImg'
import agua2 from '../img/a2.jpg'



const txtImg = {
    texto1: "El agua es el elemento más importante para la vida. Es de una importancia vital para el ser humano, así como para el resto de animales y seres vivos que nos acompañan en el planeta Tierra.",
    texto2: "Resulta curioso que el 70 por ciento de la Tierra sea agua y que el 70 por ciento de nuestro cuerpo también sea agua. Quizás sea por eso que lo recomendable para tener una dieta saludable y una larga vida sea el comer alimentos con un porcentaje del 70 por ciento en agua.",
    img: agua2,
}



export const Importancia = () => {
  return (
    <>
        <Navegacion />

      
          <TxtImg titulo="Importancia del cuidado del agua" texto1={txtImg.texto1} texto2={txtImg.texto2} img={txtImg.img} />



        <div className='next-previous container'>
            <Previous route="/" />
            <Next route="/recomendaciones" />
        </div>


        <Footer />
    
    </>

    )
}
