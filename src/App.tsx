import React from 'react';
import imageSignIn from './assets/images/illustration-sign-up-desktop.svg';
import styles from './app.module.css';
import CheckText from './components/checkText';
import EmailInput from './components/emailInput';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Stay updated!</h1>
          <p>Join 60,00+ product managers receiving monthly updates on:</p>
          <div className={styles.checkContainer}>
            <CheckText text={'Product discovery and building what matters'} />
            <CheckText text={'Measuring to ensure updates are a success'} />
            <CheckText text={'And much more!'} />
          </div>
          <EmailInput />
        </div>
        <div className={styles.rightSide}>
          <img src={imageSignIn} alt="sign in" />
        </div>
      </div>
    </div>
  );
}

export default App;
