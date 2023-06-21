import { BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import { useState } from "react"
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import Details from "./pages/Details";
import LoadingScreen from "./pages/LoadingScreen";
import { loadingContext,dataContext } from "./context/Context";

function App() {
  const [loading,setLoading] = useState(true);
  const [data, setData] = useState([]);

  return (
    <>
      <main>
        <loadingContext.Provider value={{ loading, setLoading }}>
          <dataContext.Provider value={{data, setData}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={loading?<LoadingScreen/>:<Home/>}/>
              <Route path="/productlist" element={loading?<LoadingScreen/>:<ProductList/>}/>
              <Route path="/details/:id" element={loading?<LoadingScreen/>:<Details/>}/>
            </Routes>
          </BrowserRouter>
          </dataContext.Provider>
        </loadingContext.Provider>
      </main>
    </>
  )
}

export default App
