const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal disdplay-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
}