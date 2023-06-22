import { useContext, useState } from "react";
import { dataContext } from "../../context/Context";
import { useParams } from "react-router-dom";
import "./Details.css";
import AddToCartBtn from "../../components/addToCartBtn/AddToCartBtn";
import GoBackHeader from "../../components/goBackHeader/GoBackHeader";

const Details = () => {
	const { data, setData } = useContext(dataContext);
	{
		console.log(data);
	}

	const params = useParams();

	// Nur auf die Produkte zugreifen
	const productArray = data.products;

	{console.log(productArray);}

	//das Object finden mit der passenden ID (PARAM)
	const selectedProduct = productArray.find(item => item.id === Number(params.id));

	{console.log(selectedProduct);}


	// * Counter
	const [counter, setCounter] = useState(1);

	const addOne = () => {
		setCounter(prevCount => prevCount + 1);
	};

	const subOne = () => {
		setCounter(prevCount => prevCount - 1);
	};

	return (
		<>
		<section className='detail-sec'>
				{selectedProduct ? (
					<>
					<GoBackHeader text={selectedProduct.title} />
					<article>
						<img src={selectedProduct.image} alt={selectedProduct.title} />
						<div className='title-div'>
							<h2>{selectedProduct.title}</h2>
							<div className='button-div'>
								<button onClick={subOne}>-</button>
								<p className='counter-state'>{counter}</p>
								<button onClick={addOne}>+</button>
							</div>
						</div>
						<img
							className='star'
							src='../src/pages/details/Star.png'
							alt='Star'
						/>
						<p className='product-rating'>{selectedProduct.rating}</p>
						<div className='price-div'>
							<p>{selectedProduct.stock} in stock</p>
							<h3>${selectedProduct.price}</h3>
						</div>
						<div className='description-div'>
							<h4>Description</h4>
							<p>{selectedProduct.description}</p>
						</div>
						<AddToCartBtn />
					</article>
					</>
				) : (
					<p>Loading Data...</p>
				)}
			</section>
		</>
	);
};

export default Details;
