import React from 'react';
import { createPortal } from 'react-dom';
// style
import './styles/portalModal.css';

const Modal = props => {
    if(!props.modalIsVisible) return null;

    return(
        createPortal(
            <div className="modal-container" onClick={props.onModalClose}>
                <div className="flex-container-modal">
                    <div className="close-modal" onClick={props.onModalClose}>
                        <p className="close-button-modal">X</p>
                    </div>
                    <div className="modal-content">
                        {props.children}
                    </div>
                </div>
            </div>
        , document.getElementById('modal-root'))
    )
}

export default Modal;

