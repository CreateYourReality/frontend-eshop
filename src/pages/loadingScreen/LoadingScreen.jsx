import { useContext, useEffect } from "react";
import { loadingContext, dataContext } from "../../context/Context";
import ShoppingBag from "../../assets/svg/ShoppingBag";
import "./LoadingScreen.css";
import EshopFont from "../../assets/svg/EshopFont";

const LoadingScreen = () => {
	const { setData } = useContext(dataContext);
	const { setLoading } = useContext(loadingContext);

	useEffect(() => {
		//const url = "http://feuerwerkankreativitaet.biz/data.json";
		//const myJSON = JSON.stringify(url);
		//fetch("http://feuerwerkankreativitaet.biz/test.json")
		fetch("../src/assets/FakeShop/test.json")
			.then(res => res.json())
			.then(data => {
				setData(data);
			});
	}, []);

	const DeactivateLoading = () => {
		setTimeout(stopLoading, 2500);
	};

	const stopLoading = () => {
		setLoading(false);
	};

	DeactivateLoading();

	return (
		<section className='loader'>
			<ShoppingBag />
			<EshopFont />
			<p>Your shopping solution</p>
		</section>
	);
};

export default LoadingScreen;
