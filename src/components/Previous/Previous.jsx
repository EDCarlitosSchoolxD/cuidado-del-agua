import React from 'react'
import {GrLinkPrevious} from 'react-icons/gr'
import { Link } from 'react-router-dom'

export const Previous = (props) => {
  return (
        <Link to={props.route}><GrLinkPrevious className='previous'/></Link> 
    )
}
