import styles from "./productShowcase.module.css"
import ProductLead from "../productLeftAside";
import Button from "../Buttons";
import ProductContainer from "../productsContainer";
const ProductShowCase = ()=>{
    return <div className={styles.productContainer}>
        <div>
             <ProductLead backgroundImage="https://images.pexels.com/photos/5745939/pexels-photo-5745939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
            <h4 className={styles.productTitle}>Home and <span>outdoor</span></h4> 
           <div className={styles.btnwrap}>
             <Button size='medium' variant="secondary">source Now</Button>
           </div>
            </ProductLead>
        </div>
        <div> <ProductContainer></ProductContainer></div>
    </div>
}
export default ProductShowCase;