import { useState } from "react";
import "./Search.css"
import SearchInput from "../inputs/SearchInput/SearchInput";
import SearchFilterNav from "./SearchFilterNav/SearchFilterNav";

const Search = ({setSearchText}) => {
    return ( 
        <div className="search">
            <SearchInput setText={setSearchText}/>
            <SearchFilterNav />
        </div>
     );
}
 
export default Search;