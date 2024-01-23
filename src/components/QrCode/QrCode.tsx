import styles from "./QrCode.module.scss"
import QRCode from 'react-qr-code';

type inputValueType = {
    value: string
    bgColor: string
    qrColor: string
    margin?: number
}

const QrCode = ({value, bgColor, qrColor, margin}: inputValueType) => {
    return (
        <div className={styles.qr_code} style={{padding: (margin? margin * 10 : 0), backgroundColor: bgColor}}>
            <QRCode value={value} bgColor={bgColor} fgColor={qrColor}/>
        </div>
    )
}

export default QrCode