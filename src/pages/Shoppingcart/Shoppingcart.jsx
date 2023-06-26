import { useContext, useEffect, useState } from "react";
import { dataContext, shoppingcartContext, userContext, usersContext } from "../../context/Context";
import Footer from "../../components/Footer/Footer";
import GoBackHeader from "../../components/goBackHeader/GoBackHeader";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import DeleteSvg from "../../components/svgComponents/delete/DeleteSvg";
import SearchInput from "../../components/inputs/SearchInput/SearchInput"
import './Shoppingcart.css'
import SelectSortType from "../../components/SelectSortType/SelectSortType"

const Shoppingcart = () => {
    const [summe, setSumme] = useState(0)
    const [text, setText] = useState("")

	const {users, setUsers} = useContext(usersContext)
    const { user, setUser } = useContext(userContext)
    const { shoppingcart, setShoppingcart } = useContext(shoppingcartContext);


    useEffect(() => {
        user?setShoppingcart(user[0].cart):shoppingcart.length === 0?setShoppingcart([]):null
    }, [])
    
	const setUserItem = () => {
		if (user) {
            console.log(user);
			const newUsers = users.map(item => item.username === user[0].username && item.email === user[0].email?{...item, cart: shoppingcart}:item)

			const updateUser = user.map(item => item.username === user[0].username && item.email === user[0].email?{...item, cart: shoppingcart}:item)
			setUsers(newUsers)
			setUser(updateUser)
		}
	}



    const removeProduct = (i) => {
        setShoppingcart(prev => {
            const productsArray = [...prev]
            productsArray.splice(i, 1)
            return productsArray
        })
    }

    const [sortBy, setSortBy] = useState("");

    const mySortArray = ["none","A-Z","Z-A","Lowest Price","Highest Price","Highest rating","Lowest rating"]

    const getSortType = (sortType) => {
        switch(sortType){
            case "A-Z": return sortAZ;break;
            case "Z-A": return sortZA;break;
            case "Lowest Price": return sortLow;break;
            case "Highest Price": return sortHigh;break;
            case "Highest rating": return sortRatingHigh;break;
            case "Lowest rating": return sortRatingLow;break;
            default : return;break;
        }
    }

    const sortAZ = (a, b) => a.product.title.localeCompare(b.title);
    const sortZA = (a, b) => b.product.title.localeCompare(a.title);
    const sortLow = (a, b) => a.product.price - b.product.price;
    const sortHigh = (a, b) => b.product.price - a.product.price;
    const sortRatingLow = (a, b) => a.product.rating - b.product.rating;
    const sortRatingHigh = (a, b) => b.product.rating - a.product.rating;

    const filterByText = (a) => {
        return a.product.id.toString().toLowerCase().includes(text.toLowerCase())?a:a.product.title.toLowerCase().includes(text.toLowerCase())?a:a.product.brand.toLowerCase().includes(text.toLowerCase())?a:null
    }

    useEffect(() => {
        let sum = 0;
        shoppingcart?.forEach(item => {
            sum += item.product.price * item.counter
        });
        setSumme(sum)
        setUserItem()
    }, [shoppingcart])

    return ( 
        <>
            <header>
			    <GoBackHeader text='Your Shopping Cart' summe={summe}/>
                <SearchInput setText={setText}/>
            </header>
			<main className='shoppingcart'>
                <SelectSortType mySortArray={mySortArray} sortBy={sortBy} setSortBy={setSortBy} />
				{shoppingcart ? (
					<div className="productList">
						{shoppingcart?.sort(getSortType(sortBy)).filter(text.length!==0?filterByText:(a) => a).map((products, index) => (
								<article className='articleCard'>
                                    <div onClick={() => removeProduct(index)} className="svg-wrapper">
                                        <DeleteSvg />
                                    </div>

									<ArticleCard
										title={products.product.title}
										image={products.product.image}
										id={products.product.id}
										rating={products.product.rating}
										price={products.product.price}
                                        key={index}
                                        selectedProduct={products.product}
                                        countProduct={products.counter}
									/>
								</article>
						))}
					</div>
				) : (
					<p>DATEN WERDEN GELADEN...</p>
				)}
			</main>
			<Footer />
		</>
     );
}
 
export default Shoppingcart;