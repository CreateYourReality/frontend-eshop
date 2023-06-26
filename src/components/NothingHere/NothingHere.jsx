import { Link } from "react-router-dom";
import "./NothingHere.css";

const NothingHere = () => {
	return (
		<div className='nothing-here-div'>
			<img src='../../src/assets/img/empty.png' alt='' />
			<p>Sorry, nothing's here yet</p>
			<Link to='/home'>Take a look at our products</Link>
		</div>
	);
};

export default NothingHere;
