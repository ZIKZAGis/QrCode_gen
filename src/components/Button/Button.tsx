import styles from "./Button.module.scss"

type ButtonPropsType = {
    value: string
    onClick: () => void
}

const Button = ({value, onClick}:ButtonPropsType) => {
    return (
        <button type="button" onClick={onClick} className={styles.button} id="download">
            {value}
        </button>
    )
}

export default Button