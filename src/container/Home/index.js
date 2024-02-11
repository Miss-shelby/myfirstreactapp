import HomeShowCase from "../../components/HomeComponent";
import FormComponent from "../../components/FormComponent";
import ProductShowCase from "../../components/ProductsComponent";
const Home = () => {
 return <div className="container">
  <HomeShowCase />
  <ProductShowCase/>
 <div className="formWrap">
   <FormComponent />
 </div>
 </div>
};
export default Home;
