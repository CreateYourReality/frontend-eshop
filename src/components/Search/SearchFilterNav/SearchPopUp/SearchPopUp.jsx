import { NavLink } from "react-router-dom";
import ApplyBtn from "../../../btns/ApplyBtn/ApplyBtn";
import { useContext, useEffect, useState } from "react";
import { filterContext, dataContext } from "../../../../context/Context";
import CheckBox from "../../../inputs/CheckBox/CheckBox";

const SearchPopUp = ({setOpen}) => {
    const {filter, setFilter} = useContext(filterContext);
    const {data} = useContext(dataContext)

    const [categories, setCategories] = useState([]);
    const [price, setprice] = useState([]);
    const [brands, setBrands] = useState([]);

    const categoriesArray = [...new Set(data.products.map((item, i) => item.category))]
    const priceArray = ["0 - 20 €", "20 - 50 €", "50 - 100 €", "über 100 €"]
    const brandsArray = [...new Set(data.products.map((item, i) => item.brand))]

    useEffect(() => {
        setFilter([categories, price, brands])
    }, [categories, price, brands])

    return ( 
        <>
            <section>
                <article className="categorie-container">
                    <h2>Categorie</h2>
                    {categoriesArray.map((ele, i) => <CheckBox setFilterType={setCategories} text={ele} key={i}/>)}
                </article>
                <article className="price-container">
                    <h2>Price</h2>
                    {priceArray.map((ele, i) => <CheckBox unique={true} filterType={price}setFilterType={setprice} text={ele} key={i}/>)}
                </article>
                <article className="brands-container">
                    <h2>Brands</h2>
                    {brandsArray.map((ele, i) => <CheckBox setFilterType={setBrands} text={ele} key={i}/>)}
                </article>

                <ApplyBtn setOpen={setOpen} link="/productlist" text="Apply Filter"/>
            </section>
        </>
     );
}
 
export default SearchPopUp;