import React from 'react'
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Navegacion } from '../components/nav/Navegacion';
import { Next } from '../components/Next/Next';
import { TxtImg } from '../components/TxtImg/TxtImg';

function Home() {
  return (
    <>
        <Navegacion />
        <Header />
        <TxtImg />

        <div className='next-previous container'>
            <Next route="importancia" />
        </div>

        
        <Footer />



    </>
  )
}

export {Home};