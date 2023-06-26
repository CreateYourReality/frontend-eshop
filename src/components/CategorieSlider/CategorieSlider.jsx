import { useContext, useEffect, useState } from "react";
import CategorieContainer from "./CategorieContainer/CategorieContainer";
import { filterContext, dataContext } from "../../context/Context";
import './CategorieSlider.css'
import { NavLink } from "react-router-dom";

const CategorieSlider = () => {
    const {data, setData} = useContext(dataContext)
    const categoriesArray = [...new Set(data.products.map((item, i) => item.category))]
    //const [categorie, setCategorie] = useState();
    const {filter, setFilter} = useContext(filterContext);
    const [categorieText, setCategorieText] = useState("")
    
    useEffect(() => {
        setFilter([[categorieText],[],[]])
    }, [categorieText])

    return ( 
        <>
            <div className="CategorieSlider">
                {categoriesArray.map((categorie, i) => <CategorieContainer categorieText={categorieText} setCategorieText={setCategorieText} filter={filter} setCategorie={setFilter} text={categorie} i={i} key={i}/>)}
            </div>
            <div className="ProductListHome">
                <h3>Popular</h3>
                <NavLink to="/productlist" className={"viewAll"}>View All</NavLink>
            </div>
        </>
     );
}
 
export default CategorieSlider;