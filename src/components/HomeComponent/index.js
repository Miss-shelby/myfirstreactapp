import { useEffect,useState } from "react"
import styles from "./homecomponent.module.css"
import Button from '../Buttons'
import CategoryList from "../categoryList"
import { fetchCategories } from "../../apiRrquests/fetchCategory"
import InfoCard from "../Card"
import UserAvatarComponent from "../avatar"
const HomeShowCase=(props)=>{
  const [categories,setCategory] = useState([])
  useEffect(()=>{
    const getCategories = async ()=>{
      const data = await fetchCategories()
      setCategory(data)
      // console.log(data)
    }
    getCategories()
  },[])
  console.log(categories)
    return <div className={styles.homeWrapper}>
      <div className={styles.categories}><CategoryList categories={categories}/></div>
      <div className={styles.main}>
        <h3 className={styles.mainHeading}>Latest trending <span>Electronics items</span></h3>
       <div className={styles.btnWrapper}>
         <Button variant='secondary' size='medium' fullwidth>Learn more</Button>
       </div>
        </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <InfoCard size='small'>
          <UserAvatarComponent />
         <Button fullwidth='true' size='medium' variant='primary' >Join now</Button>
         <Button fullwidth='true' size='medium' variant='secondary'>Log in </Button>
        </InfoCard>
        </div>
        <InfoCard variant="secondary">Get US $10 off with a new supplier</InfoCard>
        <InfoCard variant="primary"> Send quotes with supplier preferences  </InfoCard>
      </div>
    </div>
}
export default HomeShowCase;