import React from 'react'


const Modal = ({ handleClose, show, children}) => {

  if (!show) {
    return null
  }
  
  return (
    <div className="modal">
      <div className="modal-main">
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;