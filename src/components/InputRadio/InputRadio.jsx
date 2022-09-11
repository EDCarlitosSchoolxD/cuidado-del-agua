import React from 'react'


export const InputRadio = (props) => {
  return (
            <div className='form-inputContainer'>
                <label className='form-label' htmlFor={props.name+props.id}>{props.label}</label>
                <input className='form-input' type="radio" name={props.name} id={props.name+props.id} value={props.value} />
              </div>

  )
}
