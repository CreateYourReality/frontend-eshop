import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import Home from "./pages/Home/Home";
import Details from "./pages/details/Details.jsx";
import LoadingScreen from "./pages/loadingScreen/LoadingScreen";
import { loadingContext, dataContext, filterContext } from "./context/Context";
import Onboarding from "./pages/Onboarding/Onboarding";
import AdminPanel from "./pages/admin/AdminPanel";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([[],[],[]]);

	return (
		<>

			<>
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
									<Route
										path='/adminpanel'
										element={loading ? <LoadingScreen /> : <AdminPanel />}
									/>
								</Routes>
							</BrowserRouter>
						</filterContext.Provider>
					</dataContext.Provider>
				</loadingContext.Provider>
			</>

		</>
	);
}

export default App;
