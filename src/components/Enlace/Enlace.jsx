import React from 'react'
import { Link } from 'react-router-dom'
export const Enlace = (props) => {
  return (
   <li><Link to={props.route} className='navegacion--enlace' href={props.route}>{props.texto}</Link></li>
  )
}
