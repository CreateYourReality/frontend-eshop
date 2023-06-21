import { useContext, useEffect, useState } from "react";
import { dataContext } from "../context/Context";
import ArticleCard from "../components/ArticleCard"; 
import "./ProductList.css"
import SelectSortType from "../components/SelectSortType";

const ProductList = () => {
    const {data} = useContext(dataContext);
    const [filteredData, setFilteredData] = useState([]);
    const [sortBy, setSortBy] = useState("");

    const sortME = (sortType) => {
        let newArray = [...data.products];
        newArray = [...newArray].sort(getSortType(sortType));
        setFilteredData(newArray);
    }

    const getSortType = (sortType) => {
        switch(sortType){
            case "AZ": return sortAZ;break;
            case "ZA": return sortZA;break;
            case "Low": return sortLow;break;
            case "High": return sortHigh;break;
            case "*****": return sortRatingHigh;break;
            case "*": return sortRatingLow;break;
            default : return;break;
        }
    }

    const changeSortBy = (event) => {
        setSortBy(event.target.value);
    }

    const sortAZ = (a, b) => a.title.localeCompare(b.title);
    const sortZA = (a, b) => b.title.localeCompare(a.title);
    const sortLow = (a, b) => a.price - b.price;
    const sortHigh = (a, b) => b.price - a.price;
    const sortRatingLow = (a, b) => a.rating - b.rating;
    const sortRatingHigh = (a, b) => b.rating - a.rating;

    useEffect(() => {
        sortME(sortBy);
    },[sortBy])

   
    return ( 
        <>
        <h2>PRODUCTLIST</h2>
       <SelectSortType changeSortBy={changeSortBy} />
        <section className="productList">
            {filteredData? (
                <> 
                    {filteredData?.map((product, index) => (
                        <article className="articleCard" key={index} >
                            <ArticleCard
                                title={product.title}
                                img={product.images}
                                id={product.id}
                                rating={product.rating}
                                price={product.price}
                            />
                        </article>
                    ))}
                </>
            ) : (
                <p>DATEN WERDEN GELADEN...</p>
             )}

        </section>
        </>
     );
}
 
export default ProductList;