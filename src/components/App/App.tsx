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
  const [qrColor, setQrColor] = useState('#FFF') ///черный QR код
  const [qrBgColor, setQrBgColor] = useState('#000000') ///прозрачный фон #0000
  const [qrMargin, setQrMargin] = useState(3)
  const [qrSize, setQrSize] = useState(256)
  const [transparentBg, setTransparentBg] = useState(false)

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
    size: (size: number) => setQrSize(size),
    transparencyBg: (transparentBg: boolean) => setTransparentBg(!transparentBg)
  }

  useEffect(() => {
    generateQrCode()
  })

  useEffect(() => {
    if (transparentBg) {
      setQrBgColor('#0000')
    } else {
      setQrBgColor('#000000')
    }
  }, [transparentBg])

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h1>Генератор QR кода</h1>
        <Input onChangeValue={qrSetting.value} value={inputValue}/>
        <QrCodeField 
          value={inputValue === '' ? 'https://github.com/ZIKZAGis' : inputValue}
          bgColor={qrBgColor}
          qrColor={qrColor}
          margin={qrMargin}
          transparent={transparentBg}
        />
        <SettingsPanel 
          setQrColor={qrSetting.color}
          setQrBgColor={qrSetting.bgColor}
          setMargin={qrSetting.margin}
          setQrSize={qrSetting.size}
          switchTransparency={qrSetting.transparencyBg}
          qrBgColor={qrBgColor}
          qrColor={qrColor}
          margin={qrMargin}
          qrSize={qrSize}
          transparent={transparentBg}
        />
        <DownloadLink qrCodeLink={qrCode} qr={inputValue}/>
      </div>
    </div>
  );
}

export default App;
