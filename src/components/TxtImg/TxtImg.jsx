import React from 'react'

export const TxtImg = (props) => {
  return (
    <div className='txtImg container'>
        <h1 className='txtImg--titulo'>{props.titulo}</h1>
        
        <div className='txtImg--contenido'>
            <div className='txtImg--informacion'>
                <p>{props.texto1}</p>

                <p>{props.texto2}
                </p>
            </div>

            <div className='txtImg--img'>
                <img src={props.img} alt="" />
            </div>
        </div>
        

    </div>
  )
}
