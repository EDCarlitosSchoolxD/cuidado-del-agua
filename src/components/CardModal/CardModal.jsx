import React, { useState } from 'react'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#root')
const styleModal = {
    content:{
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }
export const CardModal = (props) => {
    const [modalIsOpen,setModalIsOpen] = useState(false);

    function changeModal(){
        setModalIsOpen(!modalIsOpen);
    }


  return (
        <div>
            <ReactModal isOpen={modalIsOpen} style={styleModal} >
                <h3 onClick={changeModal} className='x-modal'>X</h3>
                <img className='img_modal' src={props.img} loading="lazy" alt={props.titulo} />
                <p className='txt_modal'>{props.texto}</p>

            </ReactModal>

            <div className='card'onClick={changeModal} >
                <div className='card--container'>
                    <img loading='lazy' src={props.img} alt={props.titulo} />
                </div>
                    <h3 className='card--title'>{props.titulo}</h3>
                </div>


        </div>

    )
}
