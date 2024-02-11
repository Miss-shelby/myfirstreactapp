import Product from "../productItem";
import styles from "./productContainer.module.css"
const ProductContainer = () =>{
    return<div className={styles.productItemsContainer}>
        <Product imageUrl='https://images.pexels.com/photos/8082560/pexels-photo-8082560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
            <div><h4 className={styles.productTitle}>soft chairs</h4><p className={styles.productPrice}>from <span>USD 19</span></p></div>
        </Product>
        <Product imageUrl='https://images.pexels.com/photos/8082560/pexels-photo-8082560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
            <div><h4 className={styles.productTitle}>soft chairs</h4><p className={styles.productPrice}>from <span>USD 19</span></p></div>
        </Product>
        <Product imageUrl='https://images.pexels.com/photos/8082560/pexels-photo-8082560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
            <div><h4 className={styles.productTitle}>soft chairs</h4><p className={styles.productPrice}>from <span>USD 19</span></p></div>
        </Product>
        <Product imageUrl='https://images.pexels.com/photos/8082560/pexels-photo-8082560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
            <div><h4 className={styles.productTitle}>soft chairs</h4><p className={styles.productPrice}>from <span>USD 19</span></p></div>
        </Product>
        <Product imageUrl='https://images.pexels.com/photos/8082560/pexels-photo-8082560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
            <div><h4 className={styles.productTitle}>soft chairs</h4><p className={styles.productPrice}>from <span>USD 19</span></p></div>
        </Product>
        <Product imageUrl='https://images.pexels.com/photos/8082560/pexels-photo-8082560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
            <div><h4 className={styles.productTitle}>soft chairs</h4><p className={styles.productPrice}>from <span>USD 19</span></p></div>
        </Product>
        <Product imageUrl='https://images.pexels.com/photos/8082560/pexels-photo-8082560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
            <div><h4 className={styles.productTitle}>soft chairs</h4><p className={styles.productPrice}>from <span>USD 19</span></p></div>
        </Product>
        <Product imageUrl='https://images.pexels.com/photos/8082560/pexels-photo-8082560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
            <div><h4 className={styles.productTitle}>soft chairs</h4><p className={styles.productPrice}>from <span>USD 19</span></p></div>
        </Product>
    </div>
}
export default ProductContainer;