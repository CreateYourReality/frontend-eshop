import { useContext, useEffect, useState } from "react";
import { dataContext, shoppingcartContext } from "../../context/Context";
import Footer from "../../components/Footer/Footer";
import GoBackHeader from "../../components/goBackHeader/GoBackHeader";
import { Link } from "react-router-dom";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import DeleteSvg from "../../components/svgComponents/delete/DeleteSvg";
import './Shoppingcart.css'

const Shoppingcart = () => {
	const { shoppingcart, setShoppingcart } = useContext(shoppingcartContext);
    const [summe, setSumme] = useState(0)

    const removeProduct = (i) => {
        setShoppingcart(prev => {
            const productsArray = [...prev]
            productsArray.splice(i, 1)
            return productsArray
        })
    }

    useEffect(() => {
        let sum = 0;
        shoppingcart?.forEach(item => {
            sum += item.product.price * item.counter
        });
        setSumme(sum)
    }, [shoppingcart])

    console.log(summe);
    return ( 
        <>
            <header>
			    <GoBackHeader text='Your Shopping Cart' summe={summe}/>
            </header>
			<main className='productList shoppingcart'>
				{shoppingcart ? (
					<>
						{shoppingcart?.map((products, index) => (
								<article className='articleCard'>
                                    <div onClick={() => removeProduct(index)} className="svg-wrapper">
                                        <DeleteSvg />
                                    </div>
                                	<Link key={index} to={`/details/${products.product.id}`}>
									<ArticleCard
										title={products.product.title}
										image={products.product.image}
										id={products.product.id}
										rating={products.product.rating}
										price={products.product.price}
                                        count={products.counter}
                                        key={index}
									/>
                                    </Link>
								</article>
						))}
					</>
				) : (
					<p>DATEN WERDEN GELADEN...</p>
				)}
			</main>
			<Footer />
		</>
     );
}
 
export default Shoppingcart;