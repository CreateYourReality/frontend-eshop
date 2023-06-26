import Heart from "../../assets/svg/Heart";
import "./Favorites.css";
import { useContext, useEffect, useState } from "react";
import { dataContext, favoritesContext, userContext, usersContext } from "../../context/Context";
import Footer from "../../components/Footer/Footer";
import GoBackHeader from "../../components/goBackHeader/GoBackHeader";
import { Link } from "react-router-dom";
import ArticleCard from "../../components/ArticleCard/ArticleCard";

const Favorites = () => {
	const { data } = useContext(dataContext);
	const { favorites, setFavorites } = useContext(favoritesContext);
	
	const productArray = data.products;

	const {users, setUsers} = useContext(usersContext)
	const { user, setUser } = useContext(userContext)
	const [favoriteProducts, setFavoriteProducts] = useState();

	useEffect(() => {
		setFavoriteProducts(productArray.filter(product =>
			favorites.some(fav => product.id === Number(fav)),
		));
		favoriteProducts===0?setFavorites([]):null
		const setUserItem = () => {
			if (user) {
				
				const newUsers = users.map(item => item.username === user[0].username && item.email === user[0].email?{...item, fav: favoriteProducts}:item)
	
				const updateUser = user.map(item => item.username === user[0].username && item.email === user[0].email?{...item, fav: favoriteProducts}:item)
				setUsers(newUsers)
				setUser(updateUser)
			}
		}
		setUserItem()
	}, [favorites])

	return (
		<>
			<header>
				<GoBackHeader text='Favorites' />
			</header>
			<main className='productList'>
				{favoriteProducts ? (
					<>
						{favoriteProducts?.map((product, index) => (
							<Link key={index} to={`/details/${product.id}`}>
								<article className='articleCard'>
									<ArticleCard
										title={product.title}
										image={product.image}
										id={product.id}
										rating={product.rating}
										price={product.price}
									/>
								</article>
							</Link>
						))}
					</>
				) : (
					<p>DATEN WERDEN GELADEN...</p>
				)}
			</main>
			<Footer />
		</>
	);
};

export default Favorites;
