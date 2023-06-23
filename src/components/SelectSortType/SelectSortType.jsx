import { useState } from 'react';
import './SelectSortType.css'

const SelectSortType = (probs) => {
    const [text, setText] = useState();

    return (  
        <div className="sortSelect">
        <label htmlFor="sortSelect">Sort by: </label>
        <select onChange={probs.changeSortBy} name="sortSelect" id="sortSelect">
            <option value="">none</option>
            <option value="AZ">A-Z</option>
            <option value="ZA">Z-A</option>
            <option value="Low">Lowest Price</option>
            <option value="High">Highest Price</option>
            <option value="*****">Highest rating</option>
            <option value="*">Lowest rating</option>
        </select>
        </div>
    );
}
 
export default SelectSortType;