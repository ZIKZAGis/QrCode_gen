import styles from './SettingsPanel.module.scss'
import { HexColorPicker } from 'react-colorful'

type SettingsPanelPropsType = {
    setQrColor: (color: string) => void
    setQrBgColor: (color: string) => void
    qrColor: string
    qrBgColor: string
    setMargin: (margin: number) => void
    margin: number
    setQrSize: (size: number) => void
    qrSize: number
}

const SettingsPanel = ({setQrColor, setQrBgColor, setMargin, setQrSize, qrBgColor, qrColor, margin, qrSize}: SettingsPanelPropsType) => {
    const step = 256

    return (
        <div className={styles.wrapper}>
            <div className={styles.color_setting}>
                <p>Цвет QR кода</p>
                <HexColorPicker color={qrColor} onChange={setQrColor}/>
            </div>
            <div className={styles.color_setting}>
                <p>Цвета фона</p>
                <HexColorPicker color={qrBgColor} onChange={setQrBgColor}/>
            </div>
            <div className={styles.color_setting}>
               <p>Поле</p>
               <input type="range" id='margin' name='margin' value={margin} min="0" max="10" onChange={(e) => setMargin(+e.target.value)}/>
            </div>
            <div className={styles.color_setting}>
               <p>Размер {qrSize}px</p>
               <input type="range" id='size' name='size' value={qrSize / step} min="1" max="8" onChange={(e) => setQrSize(step * +e.target.value)}/>
            </div>
        </div>
    )
}

export default SettingsPanel