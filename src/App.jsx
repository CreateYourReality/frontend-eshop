import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import Home from "./pages/Home/Home";
import Details from "./pages/details/Details.jsx";
import LoadingScreen from "./pages/loadingScreen/LoadingScreen";
import {
	loadingContext,
	dataContext,
	filterContext,
	favoritesContext,
	shoppingcartContext,
	userContext
} from "./context/Context";
import Onboarding from "./pages/Onboarding/Onboarding";
import Favorites from "./pages/Favorites/Favorites";
import AdminPanel from "./pages/admin/AdminPanel";
import Shoppingcart from "./pages/Shoppingcart/Shoppingcart";
import Login from "./pages/Login/Login";

function App() {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [user, setUser] = useState([])
	const [filter, setFilter] = useState([[], [], []]);
	const [favorites, setFavorites] = useState([]);
	const [shoppingcart, setShoppingcart] = useState([])

	return (
		<>
			<>
			<userContext.Provider value={{ user, setUser }}>
				<loadingContext.Provider value={{ loading, setLoading }}>
					<dataContext.Provider value={{ data, setData }}>
						<filterContext.Provider value={{ filter, setFilter }}>
							<favoritesContext.Provider value={{ favorites, setFavorites }}>
								<shoppingcartContext.Provider value= {{shoppingcart, setShoppingcart}}>
								<BrowserRouter>
									<Routes>
										<Route
											path='/'
											element={loading ? <LoadingScreen /> : <Onboarding />}
										/>
										<Route
											path='/home'
											element={loading ? <LoadingScreen /> : <Home />}
										/>
										<Route
											path='/productlist'
											element={
												loading ? <LoadingScreen /> : <ProductListPage />
											}
										/>
										<Route
											path='/details/:id'
											element={loading ? <LoadingScreen /> : <Details />}
										/>
										<Route
											path='/favorites'
											element={loading ? <LoadingScreen /> : <Favorites />}
										/>
										<Route
											path='/cart'
											element={loading ? <LoadingScreen /> : <Shoppingcart />}
										/>
										<Route
										path='/adminpanel'
										element={loading ? <LoadingScreen /> : <AdminPanel />}
										/>
										<Route
										path='/login'
										element={loading ? <LoadingScreen /> : <Login />}
										/>
								</Routes>
								</BrowserRouter>
								</shoppingcartContext.Provider>
							</favoritesContext.Provider>
						</filterContext.Provider>
					</dataContext.Provider>
				</loadingContext.Provider>
			</userContext.Provider>
			</>
		</>
	);
}

export default App;
