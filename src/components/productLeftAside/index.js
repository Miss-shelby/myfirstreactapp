import styles from "./productleftaside.module.css"
const ProductLead = ({children,backgroundImage}) =>{
    return <div className={styles.Productwrapper} style={{backgroundImage:`url(${backgroundImage})`}} >
        {children}
    </div>
}
export default ProductLead;
