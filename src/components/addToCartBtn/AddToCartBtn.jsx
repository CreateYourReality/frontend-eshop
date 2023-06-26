import "./AddToCartBtn.css";
import { useContext, useEffect, useState } from "react";
import { dataContext, shoppingcartContext, userContext, usersContext } from "../../context/Context";

const AddToCartBtn = ({selectedProduct, counter}) => {
	const {users, setUsers} = useContext(usersContext)
    const { user, setUser } = useContext(userContext)

	const setUserItem = () => {
		if (user) {
			
			const newUsers = users.map(item => item.username === user[0].username && item.email === user[0].email?{...item, cart: shoppingcart}:item)

			const updateUser = user.map(item => item.username === user[0].username && item.email === user[0].email?{...item, cart: shoppingcart}:item)

			setUsers(newUsers)
			setUser(updateUser)
		}
	}
	const { shoppingcart, setShoppingcart } = useContext(shoppingcartContext);

	useEffect(() => {setUserItem()},[shoppingcart])
	useEffect(() => {
        shoppingcart.length === 0?setShoppingcart([]):null
    }, [])
	
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
