import './SearchInput.css'
import icon from '../../../assets/img/Search.svg'

const SearchInput = ({setText}) => {
    return ( 
        <div className='search-field'>
            <div className="icon-wrapper">
                <img src={icon} alt="Search-Icon"/>
            </div>
            <input onChange={(e) => {setText(e.target.value)}} type="text" name="search" id="search" placeholder="Search.."/>
        </div>
     );
}
 
export default SearchInput;