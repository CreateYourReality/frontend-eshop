import { useContext } from "react";
import { dataContext } from "../context/Context";
import Search from "../components/Search/Search";
import "./Home.css";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";


const Home = () => {
    const {data,setData} = useContext(dataContext)
    {console.log(data);}

    return (  
        <section className="homeSection">
            <Search />
            <ProductList/>
            <Footer/>
        </section>
    );
}
 
export default Home;