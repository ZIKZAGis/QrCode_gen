import { useState } from 'react';
import styles from "./App.module.scss"
import QrCode from '../QrCode/QrCode';
import Input from '../Input/Input';
import Button from '../Button/Button';

function App() {
  const [inputValue, setInputValue] = useState('')

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Input onChangeValue={setInputValue}/>
        <div className={styles.button_wrapper}>
          <Button value='Скачать' onClick={() => {}}/>
        </div>
        <QrCode value={inputValue === '' ? 'https://github.com/ZIKZAGis' : inputValue}/>
      </div>
    </div>
  );
}

export default App;
