import styles from "./productItem.module.css"
const Product = ({imageUrl,children})=>{
    return <div className={styles.product}>
                <div className={styles.imageContainer}>
                    <img src={imageUrl}className={styles.img} alt="" srcset="" />
                </div>
              {children}
        </div>
}
export default Product;