import { useContext } from "react";
import { dataContext } from "../context/Context";
import ProductList from "../components/ProductList";

const Home = () => {
    const {data,setData} = useContext(dataContext)
    {console.log(data);}

    return (  
        <section>
            <ProductList/>
        </section>
    );
}
 
export default Home;