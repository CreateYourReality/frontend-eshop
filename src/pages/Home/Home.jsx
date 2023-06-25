import { useContext, useEffect, useState } from "react";
import { dataContext, filterContext } from "../../context/Context";
import Search from "../../components/Search/Search";
import "./Home.css";
import ProductList from "../../components/ProductList/ProductList";
import Footer from "../../components/Footer/Footer";
import CategorieSlider from "../../components/CategorieSlider/CategorieSlider";
import Header from "../../components/Header/Header";


const Home = () => {
    const {data, setData} = useContext(dataContext)
    const [searchtext, setSearchText] = useState("");
    const {setFilter} = useContext(filterContext);

    useEffect(()=> {
        setFilter([[],[],[]])
    }, [])
    return (  
        <>
            <Header text="Find your favourite Product" setSearchText={setSearchText}/>
            <main>
                <ProductList searchtext={searchtext}/>
            </main>
            <Footer />
        </>
    );
}
 
export default Home;