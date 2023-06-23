import { useContext, useState } from "react";
import { dataContext } from "../../context/Context";
import Search from "../../components/Search/Search";
import "./Home.css";
import ProductList from "../../components/ProductList/ProductList";
import Footer from "../../components/Footer/Footer";
import CategorieSlider from "../../components/CategorieSlider/CategorieSlider";


const Home = () => {
    const {data, setData} = useContext(dataContext)
    const [searchtext, setSearchText] = useState("");

    return (  
        <>
            <header>
                <h1>Find your favourite Product</h1>
                <Search setSearchText={setSearchText}/>
            </header>
            <main>
                <ProductList searchtext={searchtext}/>
            </main>
            <Footer />
        </>
    );
}
 
export default Home;