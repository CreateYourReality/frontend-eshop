import AddToFav from "../../assets/svg/AddToFav";
import "./AddToFavBtn.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { dataContext, favoritesContext } from "../../context/Context";
import RemoveFav from "../../assets/svg/RemoveFav";

const AddToFavBtn = () => {
	const params = useParams();
	console.log(params.id);

	const { data, setData } = useContext(dataContext);
	const { favorites, setFavorites } = useContext(favoritesContext);

	const newFav = () => {
		if (favorites.includes(params.id)) {
			setFavorites(prev => prev.filter(id => id !== params.id));
		} else {
			setFavorites(prev => [...prev, params.id]);
		}
	};

	console.log(favorites);

	const isFavorite = favorites.includes(params.id);

	return (
		<div className='add-to-fav'>
			{isFavorite ? (
				<button className='add-to-fav-btn' onClick={newFav}>
					<RemoveFav />
				</button>
			) : (
				<button className='add-to-fav-btn' onClick={newFav}>
					<AddToFav />
				</button>
			)}
		</div>
	);
};

export default AddToFavBtn;
