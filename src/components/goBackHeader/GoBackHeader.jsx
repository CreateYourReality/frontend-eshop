import "./GoBackHeader.css";
import { useLocation, useNavigate } from "react-router-dom";
import arrow from "../../assets/img/arrow.png"
import Menu from "../Menu/Menu";

const GoBackHeader = props => {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1); // zurueck zur vorherigen page
	};
	
	const currentLocation = useLocation().pathname;
	const path =  "/details/"+props.id;
	const checkPath = currentLocation==="/details/"+props.id || currentLocation === "/login" || props.isMenu;
	return (
		<div className='go-back-header'>
			<button onClick={() => currentLocation === path?goBack():props.isMenu?props.open?props.setOpen(false):null:navigate("/home")}>
				<img src={arrow} alt='go-back' />
			</button>
			<div className="head-text-container">
				<div>
					<p>{props.text}</p>
				</div>
			{props.summe?<p>Der Warenkorb beinhaltet: <span>{props.summe}€</span></p>:<></>}
			</div>
			{!checkPath?
			<Menu />:<></>}
		</div>
	);
};

export default GoBackHeader;
