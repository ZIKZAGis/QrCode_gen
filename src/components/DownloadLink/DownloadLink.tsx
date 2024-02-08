import styles from "./DownloadLink.module.scss"

type DownloadLinkPropsType = {
    qrCodeLink: string
    qr: string
}

const DownloadLink = ({qrCodeLink, qr}: DownloadLinkPropsType) => {
    return (
        <a 
            href={qrCodeLink} 
            download={`${qr}.png`} 
            className={styles.link} 
            style={qr === '' ? {opacity: 0.4, pointerEvents: 'none', cursor: 'default', color: '#888'} : {}}
        >
            Скачать
        </a>
    )
}

export default DownloadLink