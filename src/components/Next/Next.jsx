import React from 'react'
import {GrLinkNext} from 'react-icons/gr'

export const Next = (props) => {
  return (
        <a href={props.route}><GrLinkNext className='next'/></a> 
    )
}
