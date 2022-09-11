import React, { useState } from "react"
import ReactModal from "react-modal"


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

ReactModal.setAppElement('#root')
export const ImageModal = (props) => {
  const [modalIsOpen,setModalIsOpen] = useState(false);


  return (
    <div className={`${props.class}`}>
      <ReactModal isOpen={modalIsOpen} style={styleModal}  >
        <h2 className="x-modal" onClick={()=>setModalIsOpen(!modalIsOpen)}>X</h2>
        <img loading="lazy" className="img_modal" src={props.img} alt="" />
        
      
        </ReactModal>


      <img loading="lazy" onClick={()=>setModalIsOpen(!modalIsOpen)} src={props.img} alt="" />
    </div>
  )
}
