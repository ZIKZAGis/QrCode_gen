import styles from "./DownloadLink.module.scss"

type DownloadLinkPropsType = {
    qrCodeLink: string
    qr: string
}

const DownloadLink = ({qrCodeLink, qr}: DownloadLinkPropsType) => {
    return (
        <a href={qrCodeLink} download={`${qr}.png`} className={styles.link}>
            Скачать
        </a>
    )
}

export default DownloadLink