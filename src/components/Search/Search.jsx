import { useState } from "react";
import "./Search.css"
import SearchInput from "../inputs/SearchInput/SearchInput";
import SearchFilterNav from "./SearchFilterNav/SearchFilterNav";

const Search = ({setSearchText}) => {
    return ( 
        <>
            <SearchInput setText={setSearchText}/>
            <SearchFilterNav />
        </>
     );
}
 
export default Search;