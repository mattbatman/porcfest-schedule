import React from 'react';

function Modal({ onModalClose, isOpen, modalEvent }) {
  if (!isOpen) {
    return null;
  }

  function preventClose(e) {
    e.stopPropagation();
  }

  return (
    <div className="Modal parent-of-center" onClick={onModalClose}>
      <div
        className="Modal-event-description"
        onClick={preventClose}
        dangerouslySetInnerHTML={{ __html: modalEvent.description }}
      />
    </div>
  );
}

export default Modal;
