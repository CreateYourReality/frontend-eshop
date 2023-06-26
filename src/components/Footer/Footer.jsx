import { NavLink } from "react-router-dom";
import "./Footer.css";
import ShapeSvg from "../svgComponents/shape/ShapeSvg";
import SearchSvg from "../svgComponents/search/SearchSvg";
import BagSvg from "../svgComponents/bag/BagSvg";
import HeartSvg from "../svgComponents/heart/HeartSvg";
import { useContext } from "react";
import { shoppingcartContext, favoritesContext } from "../../context/Context";


const Footer = () => {
	const { shoppingcart } = useContext(shoppingcartContext);
	const { favorites } = useContext(favoritesContext);

	return (
		<footer>
			<NavLink to='/home'>
				<div className="svg-wrapper">
				<ShapeSvg />
				</div>
			</NavLink>
			<NavLink to='/productlist'>
				<div className="svg-wrapper">
					<SearchSvg />
				</div>
			</NavLink>
			<NavLink to="/cart">
				<div className="svg-wrapper">
					<BagSvg />
					{shoppingcart.length!==0?<div className="note">{shoppingcart.length}</div>:null}
				</div>
			</NavLink>
			<NavLink to='/favorites'>
				<div className="svg-wrapper">
					<HeartSvg />
					{favorites.length!==0?<div className="note">{favorites.length}</div>:null}
				</div>
			</NavLink>			
		</footer>
	);
};

export default Footer;

