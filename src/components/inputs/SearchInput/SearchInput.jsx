const SearchInput = ({setText}) => {
    return ( 
        <div>
            <input onChange={(e) => {setText(e.target.value)}} type="text" name="search" id="search" placeholder="Search.."/>
        </div>
     );
}
 
export default SearchInput;