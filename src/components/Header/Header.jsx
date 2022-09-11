import React from 'react'
import ReactTypingEffect  from 'react-typing-effect'
import drawBeach from '../../img/undraw_beach.svg'

const texto = ['Un mundo mejor','El medio ambiente','Nosotros <3']

export const Header = () => {
  return (
    <header className='header'>
        <div className='header--contenido'>
            <h1 className='header--titulo'>Cuidemos el agua por: <span className='header--span'><ReactTypingEffect text={texto} speed={200} typingDelay={1000} eraseSpeed={200} eraseDelay={2000} /></span></h1>
        </div>

        <div className='header--imagen'>
            <img loading='lazy' src={drawBeach} alt="" />

        </div>


    </header>
)
}
