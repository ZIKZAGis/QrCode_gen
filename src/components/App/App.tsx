import React, { useEffect, useState } from 'react';
import QR from 'qrcode'
import styles from "./App.module.scss"
import QrCodeField from '../QrCode/QrCode';
import Input from '../Input/Input';
import DownloadLink from '../DownloadLink/DownloadLink';

function App() {
  const [inputValue, setInputValue] = useState('github.com/ZIKZAGis')
  const [qrCode, setQrCode] = useState('')

  const generateQrCode = () => {
    QR.toDataURL(
      inputValue,
      {
        width:900
      },
      (err, url) => {
        if (err) return console.log(err)
        setQrCode(url)
      }
    )
  }

  const handleQrCodeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    generateQrCode()
  })

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Input onChangeValue={handleQrCodeValue} value={inputValue}/>
        <QrCodeField value={inputValue === '' ? 'https://github.com/ZIKZAGis' : inputValue}/>
        <div className={styles.button_wrapper}>
          <DownloadLink qrCodeLink={qrCode} qr={inputValue ? inputValue : 'qr_Code'}/>
        </div>
      </div>
    </div>
  );
}

export default App;
