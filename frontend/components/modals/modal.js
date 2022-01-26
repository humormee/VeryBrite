import React from 'react'

const Modal = () => {
  // const showHideClassName = show ? "modal display-block" : "modal disdplay-none";

  return (
    <div className="modal">
      <div className="modal-main">
        
        <button type="button" >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;

// const Modal = ({ handleClose, show, children }) => {
//   const showHideClassName = show ? "modal display-block" : "modal disdplay-none";

//   return (
//     <div className={showHideClassName}>
//       <section className="modal-main">
//         {children}
//         <button type="button" onClick={handleClose}>
//           Close
//         </button>
//       </section>
//     </div>
//   );
// }

// export default Modal;