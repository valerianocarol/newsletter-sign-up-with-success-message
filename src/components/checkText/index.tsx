import React from 'react';
import check from '../../assets/images/icon-list.svg';
import styles from './checkText.module.css';

interface CheckTextProps {
    text: string;
}

const CheckText: React.FC<CheckTextProps> = ({ text }) => {
    return (
        <div className={styles.container}>
            <img src={check} alt="check" />
            <span>{text}</span>
        </div>
    )
}

export default CheckText;