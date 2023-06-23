import "./GoBackHeader.css";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/img/arrow.png"

const GoBackHeader = props => {
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1); // zurueck zur vorherigen page
	};

	return (
		<div className='go-back-header'>
			<button onClick={goBack}>
				<img src={arrow} alt='go-back' />
			</button>
			<p>{props.text}</p>
		</div>
	);
};

export default GoBackHeader;
