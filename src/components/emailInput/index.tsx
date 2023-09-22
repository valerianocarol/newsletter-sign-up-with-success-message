import React, { useState } from 'react';
import styles from './emailInput.module.css';
import Modal from '../modal';

const EmailInput = () => {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [submittedEmail, setSubmittedEmail] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        setIsValid(event.target.checkValidity());
    }

    const handleButtonClick = () => {
        if (email && isValid) {
            setSubmittedEmail(email)
            setIsModalOpen(true);
        }
    }

    const closeModal = () => {
        setSubmittedEmail('');
        setEmail('');
        setIsModalOpen(false);
    }

    const inputClassName = isValid ? styles['email-input'] : `${styles['email-input']} ${styles['invalid']}`;
    const buttonClassName = isValid ? styles['valid-button'] : styles['invalid-button'];

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <span>Email address</span>
                {!isValid && <p>Valid email required</p>}
            </div>
            <input className={inputClassName} type="email" value={email} onChange={handleEmailChange} placeholder='email@company.com'/>
            <button type='button' className={buttonClassName} disabled={!isValid} onClick={handleButtonClick}>Subscribe to monthly newsletter</button>
            <Modal isOpen={isModalOpen} onClose={closeModal} content={submittedEmail} />
        </div>
    )
}

export default EmailInput;