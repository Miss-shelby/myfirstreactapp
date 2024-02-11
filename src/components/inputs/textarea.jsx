 import styles from "./inputs.module.css"
 const TextArea=(
    {value,onchangeHandler,name}
 )=>{
    return <div>
        <textarea value={value} name={name} className={styles.inputArea} onChange={onchangeHandler} ></textarea>
    </div>
 }
 export default TextArea;