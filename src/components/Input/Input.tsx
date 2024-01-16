import styles from "./Input.module.scss"

type onChangeValueType = {
    onChangeValue: (e: React.HTMLInputTypeAttribute) => void
}

const Input = ({onChangeValue}:onChangeValueType) => {
    return (
        <input 
        type="text" 
        placeholder="введите ссылку" 
        onChange={(e) => onChangeValue(e.target.value)}
        className={styles.input}/>
    )
}

export default Input