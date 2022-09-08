import React from 'react'
import agua1 from '../../img/agua1.jpg'

export const TxtImg = () => {
  return (
    <div className='txtImg container'>
        <h1 className='txtImg--titulo'>¿Que es el cuidado del agua</h1>
        
        <div className='txtImg--contenido'>
            <div className='txtImg--informacion'>
                <p>Cuando hablamos del cuidado del agua, nos referimos al uso racional del agua. Esto implica velar por la protección de las fuentes de agua limpia y consumible en nuestro planeta, procurando no contaminarla, no malbaratarla y así preservar este líquido vital no sólo para nuestra especie, sino para la vida entera en el planeta Tierra.</p>

                <p>Como bien sabemos, el agua es indispensable para sostener el clima del planeta estable, para procesos vitales de todos los organismos (como la fotosíntesis) y para redistribuir determinados elementos químicos a lo largo del planeta (como el carbono).
                </p>
            </div>

            <div className='txtImg--img'>
                <img src={agua1} alt="" />
            </div>
        </div>
        

    </div>
  )
}
