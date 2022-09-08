import React, { useState } from 'react'
import {GiWaterDrop} from 'react-icons/gi';
import { Enlace } from '../Enlace/Enlace';
import {GrMenu} from 'react-icons/gr'
 

export const Navegacion = () => {
    
    

  return (
    <div className='nav--container'>

        <nav className={`container`}>

            <ul className='navegacion'>
                <Enlace route="/" texto={<GiWaterDrop/>} />
                <Enlace route="/importancia" texto="Importancia del agua" />
                <Enlace route="/importancia" texto="Recomendaciones para cuidar el agua" />
                <Enlace route="/importancia" texto="Ahorra agua" />
            </ul>

            
        </nav>
    </div>
    
)
}
