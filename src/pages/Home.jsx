import { useContext } from "react";
import { dataContext } from "../context/Context";
import Search from "../components/Search/Search";

import ProductList from "../components/ProductList";


const Home = () => {
    const {data,setData} = useContext(dataContext)
    {console.log(data);}

    return (  
        <section>
            <Search />
            <ProductList/>

        </section>
    );
}
 
export default Home;