import { NavLink } from "react-router-dom";
import ApplyBtn from "../../../btns/ApplyBtn/ApplyBtn";
import { useContext, useEffect, useState } from "react";
import { filterContext, dataContext } from "../../../../context/Context";
import CheckBox from "../../../inputs/CheckBox/CheckBox";
import "./SearchPopUp.css";
import GoBackHeader from "../../../goBackHeader/GoBackHeader";

const SearchPopUp = ({ setOpen }) => {
	const { filter, setFilter } = useContext(filterContext);
	const [myFilters, setMyFilters] = useState();
	const { data } = useContext(dataContext);

	const [categories, setCategories] = useState([]);
	const [price, setprice] = useState([]);
	const [brands, setBrands] = useState([]);

	const [uniqueCheck, setUniqueCheck] = useState();

	const categoriesArray = [
		...new Set(data.products.map((item, i) => item.category)),
	];
	const priceArray = ["0 - 20 €", "20 - 50 €", "50 - 100 €", "über 100 €"];
	const brandsArray = [...new Set(data.products.map((item, i) => item.brand))];
	useEffect(() => {
		setMyFilters([categories, price, brands]);
	}, [categories, price, brands]);

	return (
		<>
			<section className='popup'>
				<GoBackHeader isMenu={true} setOpen={setOpen} text='Filters' />
				<div className='article-wrapper'>
					<article className='container'>
						<h2>Categorie</h2>
						<div className='wrapper'>
							{categoriesArray.map((ele, i) => (
								<CheckBox setFilterType={setCategories} text={ele} key={i} />
							))}
						</div>
					</article>
					<article className='container'>
						<h2>Price</h2>
						<div className='wrapper'>
							{priceArray.map((ele, i) => (
								<CheckBox
									unique={true}
									uniqueCheck={uniqueCheck}
									setUniqueCheck={setUniqueCheck}
									filterType={price}
									setFilterType={setprice}
									text={ele}
									key={i}
								/>
							))}
						</div>
					</article>
					<article className='container'>
						<h2>Brands</h2>
						<div className='wrapper'>
							{brandsArray.map((ele, i) => (
								<CheckBox setFilterType={setBrands} text={ele} key={i} />
							))}
						</div>
					</article>
				</div>
				<ApplyBtn
					myFilters={myFilters}
					setOpen={setOpen}
					link='/productlist'
					text='Apply Filter'
				/>
			</section>
		</>
	);
};

export default SearchPopUp;
