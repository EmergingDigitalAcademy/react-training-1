import ReactDOM from 'react-dom';

function ModalBackground() {
  return ReactDOM.createPortal(
    <div className="modal-backdrop fade show" />,
    document.body,
  );
}

export default ModalBackground;
