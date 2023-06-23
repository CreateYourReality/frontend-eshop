import { Link } from "react-router-dom";
import "./Footer.css";
import Shape from "../../assets/img/Shape.svg";
import Search from "../../assets/img/Search.svg";

const Footer = () => {
	return (
		<footer>
			<Link to='/home'>
				<img src={Shape} alt='shape-icon' />
			</Link>
			<Link to='/productlist'>
				<img src={Search} alt='Search-icon' />
			</Link>
			<Link to='/favorites'>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fill='none'
						stroke='#B9C1CC'
						stroke-width='2'
						d='M12 5.5C9.04 2.81 4.5 4.5 4.5 8c0 3.53 3.79 6.48 7.5 9.5 3.71-3.02 7.5-5.97 7.5-9.5 0-3.5-4.54-5.19-7.5-2.5z'
					/>
				</svg>
			</Link>
		</footer>
	);
};

export default Footer;
