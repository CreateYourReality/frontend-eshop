import ProductList from "../../components/ProductList/ProductList";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";
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