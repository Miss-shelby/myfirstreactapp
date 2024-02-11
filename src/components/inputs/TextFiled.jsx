import styles from "./inputs.module.css"
//destructuring our input/textfeild props
const TextField = ({ id,
    label,
    placeholder,
    onChangeHandler,
    name,
    value,})=>{
 return <div>
    <label htmlFor={id}>{label}</label>
    <input value={value} name={name} onChange={onChangeHandler} placeholder={placeholder} id={id} className={styles.inputArea} />
 </div>
}
export default TextField;