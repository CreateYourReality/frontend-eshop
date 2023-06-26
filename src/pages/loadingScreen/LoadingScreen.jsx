import { useContext, useEffect } from "react";
import { loadingContext, dataContext, usersContext } from "../../context/Context";
import ShoppingBag from "../../assets/svg/ShoppingBag";
import "./LoadingScreen.css";
import EshopFont from "../../assets/svg/EshopFont";
import test from "../../assets/FakeShop/test.json"
import users from "../../assets/FakeShop/users.json"

const LoadingScreen = () => {
	const { setData } = useContext(dataContext);
	const { setLoading } = useContext(loadingContext);
	const { setUsers } = useContext(usersContext);

	useEffect(() => {
/*         fetch("../src/assets/FakeShop/test.json")
        .then(res => res.text())
        .then(userData => console.log(userData)&setUsers(userData)) */
		setUsers(users)
    }, [])

	useEffect(() => {
		//const url = "http://feuerwerkankreativitaet.biz/data.json";
		//const myJSON = JSON.stringify(url);
		//fetch("http://feuerwerkankreativitaet.biz/test.json")
/* 		fetch(test)
			.then(res => res.text())
			.then(data => {
				console.log(data)&setData(data);
			}); */
		setData(test)	
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
