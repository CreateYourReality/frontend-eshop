import Heart from "../../assets/svg/Heart";
import "./Favorites.css";
import { useContext } from "react";
import { dataContext, favoritesContext } from "../../context/Context";
import Footer from "../../components/Footer/Footer";
import GoBackHeader from "../../components/goBackHeader/GoBackHeader";
import { Link } from "react-router-dom";
import ArticleCard from "../../components/ArticleCard/ArticleCard";

const Favorites = () => {
	const { data } = useContext(dataContext);
	const { favorites } = useContext(favoritesContext);
	console.log(favorites);

	const productArray = data.products;

	const favoriteProducts = productArray.filter(product =>
		favorites.some(fav => product.id === Number(fav)),
	);

	console.log("Das sind die Fav Products: ", favoriteProducts);

	return (
		<>
			<GoBackHeader text='Favorites' />
			<section className='productList'>
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
			</section>
			<Footer />
		</>
	);
};

export default Favorites;
