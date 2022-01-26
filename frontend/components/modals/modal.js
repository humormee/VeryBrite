import React from 'react'


const Modal = ({ handleClose, show, children}) => {
  debugger
  if (!show) {
    return null
  }
  debugger
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