import React from 'react';
import styles from "./App.module.scss"
import QrCode from '../QrCode/QrCode';
import Input from '../Input/Input';
import Button from '../Button/Button';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Input/>
        <div className={styles.button_wrapper}>
          <Button/>
          <Button/>
        </div>
        <QrCode/>
      </div>
    </div>
  );
}

export default App;
