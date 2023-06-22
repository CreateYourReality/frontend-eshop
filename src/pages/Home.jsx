import { useContext, useState } from "react";
import { dataContext } from "../context/Context";
import Search from "../components/Search/Search";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";


const Home = () => {
    const {data, setData} = useContext(dataContext)
    const [searchtext, setSearchText] = useState("");

    {console.log(data);}

    return (  
        <>
            <header>
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