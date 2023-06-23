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
} from "./context/Context";
import Onboarding from "./pages/Onboarding/Onboarding";
import Favorites from "./pages/Favorites/Favorites";

function App() {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState([[], [], []]);
	const [favorites, setFavorites] = useState([]);

	return (
		<>
			<>
				<loadingContext.Provider value={{ loading, setLoading }}>
					<dataContext.Provider value={{ data, setData }}>
						<filterContext.Provider value={{ filter, setFilter }}>
							<favoritesContext.Provider value={{ favorites, setFavorites }}>
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
									</Routes>
								</BrowserRouter>
							</favoritesContext.Provider>
						</filterContext.Provider>
					</dataContext.Provider>
				</loadingContext.Provider>
			</>
		</>
	);
}

export default App;
