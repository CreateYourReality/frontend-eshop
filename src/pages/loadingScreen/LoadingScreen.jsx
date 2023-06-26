import { useContext, useEffect } from "react";
import { loadingContext, dataContext, usersContext } from "../../context/Context";
import ShoppingBag from "../../assets/svg/ShoppingBag";
import "./LoadingScreen.css";
import EshopFont from "../../assets/svg/EshopFont";

import newData from "../../assets/FakeShop/test.json";
import userData from "../../assets/FakeShop/users.json"


const LoadingScreen = () => {
	const { setData } = useContext(dataContext);
	const { setLoading } = useContext(loadingContext);
	const { setUsers } = useContext(usersContext);

	useEffect(() => {
   /*     fetch("../src/assets/FakeShop/users.json")
        .then(res => res.json())
        .then(userData => setUsers(userData)) */
		setUsers(userData)
    }, [])

	useEffect(() => {
		//const url = "http://feuerwerkankreativitaet.biz/data.json";
		//const myJSON = JSON.stringify(url);
		//fetch("http://feuerwerkankreativitaet.biz/test.json")
	/*	fetch("../src/assets/FakeShop/test.json")
			.then(res => res.json())
			.then(data => {
				setData(data);
			}); */

			setData(newData)
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
