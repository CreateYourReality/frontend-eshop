import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import Search from "../components/Search/Search";
import { useState } from "react";
const ProductListPage = () => {
    const [searchtext, setSearchText] = useState("");

    return (  
        <>
            <header>
                <Search setSearchText={setSearchText}/>
            </header>
            <main>
                <ProductList searchtext={searchtext}/>
            </main>
            <Footer/>

        </>
    );
}
 
export default ProductListPage;