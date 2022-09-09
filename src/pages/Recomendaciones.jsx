import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { Navegacion } from '../components/nav/Navegacion';
import { Previous } from '../components/Previous/Previous';
import { Next } from '../components/Next/Next';


export const Recomendaciones = () => {
  return (
    <>
        <Navegacion />


        <div className='next-previous container'>
            <Previous route="importancia" />
            <Next route="ahorrar" />
        </div>

        <Footer />
    
    </>
    )
}
