import styles from "./QrCode.module.scss"
import QRCode from 'react-qr-code';

type inputValueType = {
    value: string
}

const QrCode = ({value}: inputValueType) => {
    return (
        <div className={styles.qr_code}>
            <QRCode value={value}/>
        </div>
    )
}

export default QrCode