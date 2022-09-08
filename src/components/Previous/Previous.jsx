import React from 'react'
import {GrLinkPrevious} from 'react-icons/gr'

export const Previous = (props) => {
  return (
        <a href={props.route}><GrLinkPrevious className='previous'/></a> 
    )
}
