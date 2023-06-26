import AddToFav from "../../assets/svg/AddToFav";
import "./AddToFavBtn.css";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { dataContext, favoritesContext, userContext, usersContext } from "../../context/Context";
import RemoveFav from "../../assets/svg/RemoveFav";

const AddToFavBtn = () => {
	const params = useParams();
	
	const { data, setData } = useContext(dataContext);
	const { favorites, setFavorites } = useContext(favoritesContext);

	const productArray = data.products;
	const {users, setUsers} = useContext(usersContext)
	const { user, setUser } = useContext(userContext)

	useEffect(() => {
		const favoriteProducts = productArray.filter(product =>
			favorites.some(fav => product.id === Number(fav)),
		);
		favoriteProducts===0?setFavorites([]):null
		const setUserItem = () => {
			if (user) {
				
				const newUsers = users.map(item => item.username === user[0].username && item.email === user[0].email?{...item, fav: favoriteProducts}:item)
	
				const updateUser = user.map(item => item.username === user[0].username && item.email === user[0].email?{...item, fav: favoriteProducts}:item)
				setUsers(newUsers)
				setUser(updateUser)
			}
		}
		setUserItem()
	}, [favorites])
	const newFav = () => {
		if (favorites.includes(params.id)) {
			setFavorites(prev => prev.filter(id => id !== params.id));
		} else {
			setFavorites(prev => [...prev, params.id]);
		}
	};

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
