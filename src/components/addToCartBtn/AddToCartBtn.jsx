import "./AddToCartBtn.css";
import AddToFav from "../../assets/svg/AddToFav";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { dataContext, shoppingcartContext } from "../../context/Context";
import RemoveFav from "../../assets/svg/RemoveFav";

const AddToCartBtn = ({selectedProduct, counter}) => {
	const params = useParams();

	const { data, setData } = useContext(dataContext);
	const { shoppingcart, setShoppingcart } = useContext(shoppingcartContext);
	const isInsideCart = shoppingcart.some(item => item.product.id === selectedProduct.id&&item.counter === counter)
	const hasSameCount = shoppingcart.some(item => item.product.id === selectedProduct.id&&item.counter !== counter)

	const setCartItem = () => {
		if (isInsideCart) {
			setShoppingcart(prev => prev.filter(item => item.product.id!==selectedProduct.id));
		}
		else {
			setShoppingcart(prev => {
				const cartProducts = [...prev];
				const hasProductIndex = cartProducts.findIndex(item => item.product.id === selectedProduct.id);

				hasProductIndex!==-1?cartProducts[hasProductIndex].counter = counter:cartProducts.push({ product: selectedProduct, counter: counter})
				return cartProducts
			});
		}
	};
	
	return (
		<>
				<button className="example" onClick={setCartItem}>
					{isInsideCart?"Remove from Cart":hasSameCount?"Update your Cart":"Add to Cart"}
				</button>

		</>
	);
};

export default AddToCartBtn;
