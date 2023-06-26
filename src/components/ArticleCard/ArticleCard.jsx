import "./ArticleCard.css"
import star from '../../assets/img/star.png'
import frame from '../../assets/img/Frame.svg'
import { useEffect, useState, useContext } from "react"
import MinusSvg from "../svgComponents/minus/MinusSvg"
import PlusSvg from "../svgComponents/plus/PlusSvg"
import { Link } from "react-router-dom"
import { shoppingcartContext } from "../../context/Context";

const ArticleCard = (probs) => {
    const [counter, setCounter] = useState(probs.countProduct?probs.countProduct:0)
	const { shoppingcart, setShoppingcart } = useContext(shoppingcartContext);



    useEffect(() => {
        probs.selectedProduct?
        setShoppingcart(prev => {
            const cartProducts = [...prev];
            const hasProductIndex = cartProducts.findIndex(item => item.product.id === probs.selectedProduct.id);

            hasProductIndex!==-1?cartProducts[hasProductIndex].counter = counter:cartProducts.push({ product: probs.selectedProduct, counter: counter})
            return cartProducts
        }):null
    },[counter])

    return (  
        <>
            <figure>
                <Link to={`/details/${probs.id}`}>
                    <div className="imgDiv">
                        <img src={probs.image} alt={probs.title} />
                    </div>
                </Link>
                <figcaption>
                    <img
			    		className='star'
			    		src={star}
			    		alt='Star'
			    	/>
                    <p>{probs.rating}</p>
                </figcaption>
            </figure>
            <div>
                <h2>{probs.title}</h2>
                <div>
                    <h3>${probs.price},00</h3>
                    {probs.selectedProduct?
                    <>
                    <div className='button-div'>
						<button onClick={() => counter > 1?setCounter(prev => prev - 1):null}>
							<MinusSvg />
						</button>
						<p className='counter-state'>{counter}</p>
						<button onClick={() => counter < probs.selectedProduct.stock?setCounter(prev => prev + 1):null}>
							<PlusSvg />
						</button>
					</div>
                    <p>Gesamtpreis:{counter * probs.price}</p>
                    </>
                    :<></>}
                </div>
            </div>
            <div className="frame-img">
                <Link to={`/details/${probs.id}`}>
                    <img src={frame} alt="frame-icon"/>   
                </Link> 
            </div>  
            </>
    );
}
 
export default ArticleCard;