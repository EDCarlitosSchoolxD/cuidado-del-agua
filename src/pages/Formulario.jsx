import React from 'react'
import { Footer } from '../components/Footer/Footer'
import { Navegacion } from '../components/nav/Navegacion'
import { Previous } from '../components/Previous/Previous'

export const Formulario = () => {
  return (
    <div>
        <Navegacion />



            <div className='next-previous container'>
                <Previous route="/recomendaciones" />
            </div>


        <Footer />

    </div>
  )
}
