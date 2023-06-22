import "./GoBackHeader.css";
import { useNavigate } from "react-router-dom";

const GoBackHeader = props => {
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1); // zurueck zur vorherigen page
	};

	return (
		<header className='go-back-header'>
			<button onClick={goBack}>
				<img src='../src/components/goBackHeader/arrow.png' alt='go-back' />
			</button>
			<p>{props.text}</p>
		</header>
	);
};

export default GoBackHeader;
