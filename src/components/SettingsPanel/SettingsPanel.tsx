import styles from './SettingsPanel.module.scss'

const SettingsPanel = () => {
    return (
        <div className={styles.wrapper}>
            <div>
                Настройка Цвета QR кода
            </div>
            <div>
                Настройка Цвета фона
            </div>
            <div>
                Настройка поля
            </div>
            <div>
                Настройка размера
            </div>
        </div>
    )
}

export default SettingsPanel