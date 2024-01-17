import { useState } from 'react';
import QR from 'qrcode'
import styles from "./App.module.scss"
import QrCodeField from '../QrCode/QrCode';
import Input from '../Input/Input';
import DownloadLink from '../DownloadLink/DownloadLink';

function App() {
  const [inputValue, setInputValue] = useState('')
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

  const handleQrCode = (e: any) => {
    setInputValue(e.target.value)
    generateQrCode()
  }

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Input onChangeValue={handleQrCode} value={inputValue}/>
        <div className={styles.button_wrapper}>
          <DownloadLink qrCodeLink={qrCode} qr={inputValue}/>
        </div>
        <QrCodeField value={inputValue === '' ? 'https://github.com/ZIKZAGis' : inputValue}/>
      </div>
    </div>
  );
}

export default App;
