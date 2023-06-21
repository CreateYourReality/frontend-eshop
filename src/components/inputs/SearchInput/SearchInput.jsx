const SearchInput = ({setText}) => {
    return ( 
        <div>
            <label htmlFor="search"></label>
            <input onChange={(e) => {setText(e.target.value)}}type="text" name="search" placeholder="Search.."/>
        </div>
     );
}
 
export default SearchInput;