import { useContext, useState } from "react";
import CategorieContainer from "./CategorieContainer/CategorieContainer";
import { filterContext, dataContext } from "../../context/Context";
import './CategorieSlider.css'

const CategorieSlider = () => {
    const {data, setData} = useContext(dataContext)
    const categoriesArray = [...new Set(data.products.map((item, i) => item.category))]
    //const [categorie, setCategorie] = useState();
    const {filter, setFilter} = useContext(filterContext);

    return ( 
        <>
            <div className="CategorieSlider">
                {categoriesArray.map((categorie, i) => <CategorieContainer setCategorie={setFilter} text={categorie} key={i}/>)}
            </div>
        </>
     );
}
 
export default CategorieSlider;