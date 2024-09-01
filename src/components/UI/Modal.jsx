import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ show, onClose, children }) => {
    if (!show) return null;

    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>✖️</button>
                {children}
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default Modal;
