import { useContext, useEffect, useState } from "react";
import { dataContext, filterContext, userContext, shoppingcartContext, favoritesContext } from "../../context/Context";
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

    const { user } = useContext(userContext)
    const { shoppingcart, setShoppingcart } = useContext(shoppingcartContext);
    const { favorites } = useContext(favoritesContext);
	const [favoriteProducts, setFavoriteProducts] = useState([]);


    useEffect(() => {
        setFavoriteProducts(data.products.filter(product =>
			favorites.some(fav => product.id === Number(fav)),
		));

        user?setShoppingcart(user[0].cart):shoppingcart.length === 0?setShoppingcart([]):null
        user?setFavoriteProducts(user[0].fav):favoriteProducts.length === 0?setFavoriteProducts([]):null

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