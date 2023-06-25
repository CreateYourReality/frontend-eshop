import { NavLink } from "react-router-dom";
import "./Footer.css";
import ShapeSvg from "../svgComponents/shape/ShapeSvg";
import SearchSvg from "../svgComponents/Search/SearchSvg";
import BagSvg from "../svgComponents/bag/BagSvg";
import HeartSvg from "../svgComponents/heart/HeartSvg";



const Footer = () => {

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
				</div>
			</NavLink>
			<NavLink to='/favorites'>
				<div className="svg-wrapper">
					<HeartSvg />
				</div>
			</NavLink>
			<NavLink to="/adminpanel">
				<div className="svg-wrapper">
					ADMIN
				</div>
			</NavLink>    
			
		</footer>
	);
};

export default Footer;

