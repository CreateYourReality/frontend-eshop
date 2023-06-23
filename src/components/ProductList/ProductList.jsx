import { useContext, useEffect, useState } from "react";
import { dataContext, filterContext } from "../../context/Context";
import "./ProductList.css"
import SelectSortType from "../SelectSortType/SelectSortType";
//import ArticleCardAlternative from "./ArticleCardAlternative";
import { Link } from "react-router-dom";
import ArticleCard from "../ArticleCard/ArticleCard";
import { useLocation } from "react-router-dom";
import CategorieSlider from "../CategorieSlider/CategorieSlider";

const ProductList = ({searchtext}) => {
    const {data} = useContext(dataContext);
    const {filter, setFilter} = useContext(filterContext);
    const [filteredData, setFilteredData] = useState([]);

    const location = useLocation();
    let sortStart = "";
    location.pathname == "/home" ? sortStart = "Highest rating" : "";
    
    const [sortBy, setSortBy] = useState(sortStart);

    const sortAZ = (a, b) => a.title.localeCompare(b.title);
    const sortZA = (a, b) => b.title.localeCompare(a.title);
    const sortLow = (a, b) => a.price - b.price;
    const sortHigh = (a, b) => b.price - a.price;
    const sortRatingLow = (a, b) => a.rating - b.rating;
    const sortRatingHigh = (a, b) => b.rating - a.rating;

    const sortME = (sortType) => {
        let newArray = [...data.products];
        newArray = [...newArray].sort(getSortType(sortType));
        
        filterArray.forEach(filter => {
            newArray = newArray.filter(filter);
        });
        setFilteredData(newArray);
    }


    const filterByCategories = (a) => {
        return filter[0].length!==0?filter[0].some((filter) => a.category.includes(filter))?a:null:a
    }

    const filterByPrice = (a) => {
        const getPriceRange = (priceType) => {
            switch(priceType[0]){
                case "0 - 20 €": return a.price>=0&&a.price<=20;break;
                case "20 - 50 €": return a.price>=20&&a.price<=50 ;break;
                case "50 - 100 €": return a.price>=50&&a.price<=100 ;break;
                case "über 100 €": return a.price>=100 ;break;
                default : return null;
            }
        }
        const priceRange = getPriceRange(filter[1])
        return priceRange?a:null
    } 
    
    const filterByBrands = (a) => {
        return filter[2].length!==0?filter[2].some((filter) => a.brand.includes(filter))?a:null:a
    }

    const filterByText = (a) => {
        return a.id.toString().toLowerCase().includes(searchtext.toLowerCase())?a:a.title.toLowerCase().includes(searchtext.toLowerCase())?a:a.brand.toLowerCase().includes(searchtext.toLowerCase())?a:null
    }
    const filterArray = []


    const mySortArray = ["none","A-Z","Z-A","Lowest Price","Highest Price","Highest rating","Lowest rating"]
    const getSortType = (sortType) => {
        switch(sortType){
            case "A-Z": return sortAZ;break;
            case "Z-A": return sortZA;break;
            case "Lowest Price": return sortLow;break;
            case "Highest Price": return sortHigh;break;
            case "Highest rating": return sortRatingHigh;break;
            case "Lowest rating": return sortRatingLow;break;
            default : return;break;
        }
    }

    
    const changeSortBy = (event) => {
        setSortBy(event.target.value);
    }


    useEffect(() => {
        searchtext.length!==0?filterArray.push(filterByText):null
        filter[0].length!==0?filterArray.push(filterByCategories):null
        filter[1].length!==0?filterArray.push(filterByPrice):null
        filter[2].length!==0?filterArray.push(filterByBrands):null

        sortME(sortBy);
    },[sortBy, searchtext, filter])


    const maxArticleHome = 4;
    let i = 0;

    return ( 
        <>  
        {location.pathname!=="/home"?<SelectSortType mySortArray={mySortArray}sortBy={sortBy} setSortBy={setSortBy} />
        :
        <>
            <CategorieSlider />
        </>}
        <section className="productList">
            {filteredData? (
                <> 
                    {filteredData?.map((product, index) => {

                        if(location.pathname == "/home"){
                            if(i == maxArticleHome)
                                return null;
                            else 
                                i++;
                        }

                        return (
                        <Link key={index} to={`/details/${product.id}`}>
                            <article className="articleCard"  >
                                <ArticleCard
                                    title={product.title}
                                    image={product.image}
                                    id={product.id}
                                    rating={product.rating}
                                    price={product.price}
                                />
                            </article>
                        </Link>
                        )}                             
                        )}
                </>
            ) : (
                <p>DATEN WERDEN GELADEN...</p>
             )}

        </section>
        </>
     );
}
 
export default ProductList;