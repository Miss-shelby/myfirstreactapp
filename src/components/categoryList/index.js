import styles from "./category.module.css";
const CategoryList=  ({
    categories
})=>{
   console.log(categories)
   return <ul>
        {
            categories?.map((category)=>{
                return <li className={styles.categoryElement} key={category.id}>{category.username}</li>
            })
        }
        
    </ul>
}
export default CategoryList;