import React from 'react'

export const Enlace = (props) => {
  return (
   <li><a className='navegacion--enlace' href={props.route}>{props.texto}</a></li>
  )
}
