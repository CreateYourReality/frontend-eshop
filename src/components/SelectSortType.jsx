const SelectSortType = (probs) => {
    return (  
        <>
        <label >Sort by: </label>
        <select onChange={probs.changeSortBy} name="" id="sortSelect">
            <option value="">none</option>
            <option value="AZ">A-Z</option>
            <option value="ZA">Z-A</option>
            <option value="Low">Lowest Price</option>
            <option value="High">Highest Price</option>
            <option value="*****">Highest rating</option>
            <option value="*">Lowest rating</option>
        </select>
        </>
    );
}
 
export default SelectSortType;