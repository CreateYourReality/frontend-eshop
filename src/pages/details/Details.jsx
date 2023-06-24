import { useContext, useState } from "react";
import { dataContext, favoritesContext } from "../../context/Context";
import { useParams } from "react-router-dom";
import "./Details.css";
import AddToCartBtn from "../../components/addToCartBtn/AddToCartBtn";
import GoBackHeader from "../../components/goBackHeader/GoBackHeader";
import Footer from "../../components/Footer/Footer";
import star from "../../assets/img/Star.png";
import AddToFavBtn from "../../components/addToFavBtn/addToFavBtn";
import MinusSvg from "../../components/svgComponents/minus/MinusSvg";
import PlusSvg from "../../components/svgComponents/plus/PlusSvg";

const Details = () => {
	const { data, setData } = useContext(dataContext);

	const { favorites } = useContext(favoritesContext);

	const params = useParams();

	// Nur auf die Produkte zugreifen
	const productArray = data.products;

	//das Object finden mit der passenden ID (PARAM)
	const selectedProduct = productArray.find(
		item => item.id === Number(params.id),
	);

	// * Counter
	const [counter, setCounter] = useState(1);

	const addOne = () => {
		if (counter < selectedProduct.stock) {
			setCounter(prevCount => prevCount + 1);
		}
	};

	const subOne = () => {
		if (counter > 1) {
			setCounter(prevCount => prevCount - 1);
		}
	};

	return (
		<>
		<header>
			{selectedProduct?(<><GoBackHeader id={selectedProduct.id} text={selectedProduct.title} />
			</>):null}
		</header>
		<main className='detail-sec'>
				{selectedProduct ? (
					<>
						<article>
							<div className='img-wrapper'>
								<img src={selectedProduct.image} alt={selectedProduct.title} />
							</div>
							<div className='infoBox'>
								<div className='title-div'>
									<h2>{selectedProduct.title}</h2>
									<div className='button-div'>
										<button onClick={subOne}>
											<MinusSvg />
										</button>
										<p className='counter-state'>{counter}</p>
										<button onClick={addOne}>
											<PlusSvg />
										</button>
									</div>
								</div>
								<div className='rating'>
									<img className='star' src={star} alt='Star' />
									<p className='product-rating'>{selectedProduct.rating}</p>
								</div>
								<div className='price-div'>
									<p>{selectedProduct.stock} pieces in stock</p>
									<h3>${selectedProduct.price}</h3>
								</div>
								<AddToFavBtn />
							</div>
						</article>
						<div className='description-div'>
							<h4>Description</h4>
							<p>{selectedProduct.description}</p>
						</div>
						<AddToCartBtn selectedProduct={selectedProduct} counter={counter}/>
					</>
				) : (
					<p>Loading Data...</p>
				)}
			</main>
			<Footer />
		</>
	);
};

export default Details;
