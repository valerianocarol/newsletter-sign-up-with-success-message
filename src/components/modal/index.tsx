import React from 'react';
import check from '../../assets/images/icon-success.svg'
import styles from './modal.module.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.modalContainer}>
                <img src={check} alt="check" />
                <h1>Thanks for subscribing!</h1>
                <p>A confirmation email has been sent to <span>{content}</span>. Please open it and click the button inside to confirm your subscription.</p>
                <button onClick={onClose}>Dismiss message</button>
            </div>
        </div>
    )
}

export default Modal;