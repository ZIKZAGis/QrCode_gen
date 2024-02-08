import styles from "./Input.module.scss"

type onChangeValueType = {
    onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
}


const Input = ({onChangeValue, value}:onChangeValueType) => {
    return (
        <input 
        type="text" 
        placeholder="Введите ссылку латиницей" 
        onChange={onChangeValue}
        className={styles.input}
        value={value}
        />
    )
}

export default Input