import { useState, useContext } from "react";
import navIcon from "../../../assets/img/filter.svg"
import './SearchFilterNav.css'
import SearchPopUp from "./SearchPopUp/SearchPopUp";

const SearchFilterNav = () => {
    const [open, setOpen] = useState(false)
    return ( 
        <>
            <nav>
                <img onClick={() => setOpen(true)} src={navIcon} alt="navicon"/> 
                {open?<SearchPopUp setOpen={setOpen}/>:<></>}
            </nav>
        </>
     );
}
 
export default SearchFilterNav;