import React from 'react'
import {GrLinkNext} from 'react-icons/gr'
import { Link } from 'react-router-dom'

export const Next = (props) => {
  return (
        <Link to={props.route}><GrLinkNext className='next'/></Link> 
    )
}
