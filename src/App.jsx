import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import ProductListPage from "./pages/ProductListPage";
import Home from "./pages/Home";
import Details from "./pages/details/Details.jsx";
import LoadingScreen from "./pages/loadingScreen/LoadingScreen";
import { loadingContext, dataContext, filterContext } from "./context/Context";
import Onboarding from "./pages/Onboarding";

function App() {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState([]);

	return (
		<>
			<main>
				<loadingContext.Provider value={{ loading, setLoading }}>
					<dataContext.Provider value={{ data, setData }}>
						<filterContext.Provider value={{ filter, setFilter }}>
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
										element={loading ? <LoadingScreen /> : <ProductListPage />}
									/>
									<Route
										path='/details/:id'
										element={loading ? <LoadingScreen /> : <Details />}
									/>
								</Routes>
							</BrowserRouter>
						</filterContext.Provider>
					</dataContext.Provider>
				</loadingContext.Provider>
			</main>
		</>
	);
}

export default App;
