import { useState } from "react";
import "./Search.css"
import SearchInput from "../inputs/SearchInput/SearchInput";
import SearchFilterNav from "./SearchFilterNav/SearchFilterNav";

const Search = () => {
    const [text, setText] = useState();
    return ( 
        <>
            <SearchInput setText={setText}/>
            <SearchFilterNav />
        </>
     );
}
 
export default Search;