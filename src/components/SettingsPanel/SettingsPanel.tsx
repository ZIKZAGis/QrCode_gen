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
    transparent: boolean
    switchTransparency: (transparencyBg: boolean) => void
}

const SettingsPanel = ({setQrColor, setQrBgColor, setMargin, setQrSize, switchTransparency, qrBgColor, qrColor, margin, qrSize, transparent}: SettingsPanelPropsType) => {
    const step = 256

    //---------ЗАМЕНИТЬ КЛИК ПО ПАНЕЛИ, НА КЛИК ПО КНОПКЕ!!!

    const toggleSettingVisibility = (e: any) => {
        const settings = document.querySelectorAll(`.${styles.color_setting}:not(:last-child)`)
        settings.forEach((el) => {
            el.classList.remove(styles.color_setting_open)
        })

        if (e.target.classList.contains(styles.color_setting)) {
            e.target.classList.toggle(styles.color_setting_open)
        }
    }

    return (
        <div className={styles.wrapper}  onClick={toggleSettingVisibility}>
            <div className={styles.color_setting}>
                <p>Цвет QR кода</p>
                <HexColorPicker color={qrColor} onChange={setQrColor}/>
            </div>
            <div className={styles.color_setting} style={{opacity: transparent ? 0.15 : 1}}>
                <p>Цвета фона</p>
                <HexColorPicker color={qrBgColor} onChange={setQrBgColor}/>
                {transparent && <div className={styles.block}></div>}
            </div>
            <div className={styles.color_setting}>
               <p>Поле</p>
               <input type="range" id='margin' name='margin' value={margin} min="0" max="10" onChange={(e) => setMargin(+e.target.value)}/>
            </div>
            <div className={styles.color_setting}>
               <p>Размер {qrSize}px</p>
               <input type="range" id='size' name='size' value={qrSize / step} min="1" max="8" onChange={(e) => setQrSize(step * +e.target.value)}/>
            </div>
            <div className={styles.color_setting}>
                <button type='button' onClick={() => switchTransparency(transparent)}>Прозрачный фон</button>
                {transparent && <div>ON</div>}
                {!transparent && <div>OFF</div>}
            </div>
        </div>
    )
}

export default SettingsPanel