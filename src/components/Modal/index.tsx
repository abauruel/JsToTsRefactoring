import {  ReactNode, useEffect,  useState } from 'react';
import ReactModal from 'react-modal';

type ModalProps = {
  isOpen: boolean
  children: ReactNode
  setIsOpen: (state: boolean) =>void
}

export function Modal({isOpen, setIsOpen, children}: ModalProps) {
  const [modalStatus, setModalstatus] = useState(isOpen)
 

useEffect(() =>{
    setModalstatus(isOpen)
},[isOpen])

function handleCloseModal(){
  setModalstatus(false)
  setIsOpen(false)
}

    return (
      <ReactModal
        shouldCloseOnOverlayClick={!false}
        onRequestClose={handleCloseModal}
        isOpen={modalStatus}
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#F0F0F5',
            color: '#000000',
            borderRadius: '8px',
            width: '736px',
            border: 'none',
          },
          overlay: {
            backgroundColor: '#121214e6',
          },
        }}
      >
        {children}
      </ReactModal>
    );
  }



