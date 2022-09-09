import React from 'react'
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Navegacion } from '../components/nav/Navegacion';
import { Next } from '../components/Next/Next';
import { TxtImg } from '../components/TxtImg/TxtImg';
import agua1 from '../img/agua1.jpg'


const txtImg = {
  texto1: "Cuando hablamos del cuidado del agua, nos referimos al uso racional del agua. Esto implica velar por la protección de las fuentes de agua limpia y consumible en nuestro planeta, procurando no contaminarla, no malbaratarla y así preservar este líquido vital no sólo para nuestra especie, sino para la vida entera en el planeta Tierra.",
  texto2: "Como bien sabemos, el agua es indispensable para sostener el clima del planeta estable, para procesos vitales de todos los organismos (como la fotosíntesis) y para redistribuir determinados elementos químicos a lo largo del planeta (como el carbono).",
  img: agua1
}





function Home() {
  return (
    <>
        <Navegacion />
        <Header />
        <TxtImg  titulo="¿Que es el cuidado del agua?" texto1={txtImg.texto1} texto2={txtImg.texto2} img={txtImg.img}/>

        <div className='next-previous container'>
            <Next route="importancia" />
        </div>

        
        <Footer />



    </>
  )
}

export {Home};