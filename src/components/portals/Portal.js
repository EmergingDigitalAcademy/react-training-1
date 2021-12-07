import { useState } from 'react';

import ModalBackground from './ModalBackground';

function Portal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container" id="portals">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Portals</h1>
          <p className="col-md-8 fs-4">
            Users like <strong>interactivity</strong>. Click the button below to trigger a modal overlay.
          </p>
          <button className="btn btn-primary btn-lg" type="button" onClick={toggleOpen}>
            {isOpen ? 'Close Modal' : 'Open Modal'}
          </button>
        </div>
      </div>
      <div className={`modal fade ${isOpen && 'show d-block'}`} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Hooray!</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggleOpen}></button>
            </div>
            <div className="modal-body">
              <p className="fs-4">This is where modal content would go. Close the modal by clicking any of the buttons.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={toggleOpen}>Close</button>
              <button type="button" className="btn btn-primary" onClick={toggleOpen}>Understood</button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <ModalBackground />
      )}
    </div>
  )
}

export default Portal;
