import { useContext, useState } from "react";
import { dataContext, favoritesContext } from "../../context/Context";
import { useParams } from "react-router-dom";
import "./Details.css";
import AddToCartBtn from "../../components/addToCartBtn/AddToCartBtn";
import GoBackHeader from "../../components/goBackHeader/GoBackHeader";
import Footer from "../../components/Footer/Footer";
import star from "../../assets/img/Star.png";
import AddToFavBtn from "../../components/addToFavBtn/addToFavBtn";

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
											<svg
												width='16'
												height='16'
												viewBox='0 0 16 16'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<g id='Frame' clipPath='url(#clip0_1_1371)'>
													<path
														id='Vector'
														d='M7.33334 7.33338L8.66668 7.33337L12.6667 7.33338V8.66671H8.66668L7.33334 8.66672L3.33334 8.66671V7.33338H7.33334Z'
														fill='white'
													/>
												</g>
												<defs>
													<clipPath id='clip0_1_1371'>
														<rect width='16' height='16' fill='white' />
													</clipPath>
												</defs>
											</svg>
										</button>
										<p className='counter-state'>{counter}</p>
										<button onClick={addOne}>
											<svg
												width='16'
												height='16'
												viewBox='0 0 16 16'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<g id='Frame' clipPath='url(#clip0_1_1368)'>
													<path
														id='Vector'
														d='M7.33334 7.33337V3.33337H8.66668V7.33337H12.6667V8.66671H8.66668V12.6667H7.33334V8.66671H3.33334V7.33337H7.33334Z'
														fill='white'
													/>
												</g>
												<defs>
													<clipPath id='clip0_1_1368'>
														<rect width='16' height='16' fill='white' />
													</clipPath>
												</defs>
											</svg>
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
