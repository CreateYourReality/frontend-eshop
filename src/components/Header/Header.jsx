import Menu from "../Menu/Menu";
import Search from "../Search/Search";
import AccountSvg from "../svgComponents/account/AccountSvg";
import ProfileSvg from "../svgComponents/profile/ProfileSvg";
import './Header.css'

const Header = ({text, setSearchText}) => {
    return ( 
        <header>
            {text?<div className="headliner"><h1>{text}</h1><Menu /></div>:<></>}
            <Search setSearchText={setSearchText}/>
        </header>
     );
}
 
export default Header;