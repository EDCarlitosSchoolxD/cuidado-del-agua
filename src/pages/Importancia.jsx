import React from 'react'
import { Footer } from '../components/Footer/Footer'
import { Navegacion } from '../components/nav/Navegacion'
import { Next } from '../components/Next/Next'
import { Previous } from '../components/Previous/Previous'

export const Importancia = () => {
  return (
    <>
        <Navegacion />



        <div className='next-previous container'>
            <Previous route="/" />
            <Next route="recomendaciones" />
        </div>


        <Footer />
    
    </>

    )
}
