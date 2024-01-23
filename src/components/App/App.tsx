import React, { useEffect, useState } from 'react';
import QR from 'qrcode'
import styles from "./App.module.scss"
import QrCodeField from '../QrCode/QrCode';
import Input from '../Input/Input';
import DownloadLink from '../DownloadLink/DownloadLink';
import SettingsPanel from '../SettingsPanel/SettingsPanel';

function App() {
  const [inputValue, setInputValue] = useState('github.com/ZIKZAGis')
  const [qrCode, setQrCode] = useState('')
  const [qrColor, setQrColor] = useState('#000000') ///черный QR код
  const [qrBgColor, setQrBgColor] = useState('#FFF') ///прозрачный фон #0000
  const [qrMargin, setQrMargin] = useState(3)
  const [qrSize, setQrSize] = useState(900)

  const generateQrCode = () => {
    QR.toDataURL(
      inputValue,
      {
        margin: qrMargin,
        color: {
          dark: qrColor,
          light: qrBgColor,
        },
        width: qrSize
      },
      (err, url) => {
        if (err) return console.log(err)
        setQrCode(url)
      }
    )
  }

  const qrSetting = {
    value: (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value),
    color: (color: string) => setQrColor(color),
    bgColor: (color: string) => setQrBgColor(color),
    margin: (margin: number) => setQrMargin(margin),
    size: (size: number) => setQrSize(size)
  }

  useEffect(() => {
    generateQrCode()
  })

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h1>QR Code Generator</h1>
        <Input onChangeValue={qrSetting.value} value={inputValue}/>
        <QrCodeField 
          value={inputValue === '' ? 'https://github.com/ZIKZAGis' : inputValue}
          bgColor={qrBgColor}
          qrColor={qrColor}
          margin={qrMargin}
        />
        <SettingsPanel/>
        <div className={styles.button_wrapper}>
          <DownloadLink qrCodeLink={qrCode} qr={inputValue ? inputValue : 'qr_Code'}/>
        </div>
      </div>
    </div>
  );
}

export default App;
