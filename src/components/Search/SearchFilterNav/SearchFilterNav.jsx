import { useState, useContext } from "react";
import navIcon from "../../../assets/img/filter.svg"
import './SearchFilterNav.css'
import SearchPopUp from "./SearchPopUp/SearchPopUp";
import { filterContext } from "../../../context/Context";

const SearchFilterNav = () => {
    const {filter, setFilter} = useContext(filterContext);
    const [open, setOpen] = useState(false)

    return ( 
        <>
            <nav>
                <img onClick={() => setOpen(true)&setFilter([])} src={navIcon} alt="navicon"/> 
                {open?<SearchPopUp setOpen={setOpen}/>:<></>}
            </nav>
        </>
     );
}
 
export default SearchFilterNav;