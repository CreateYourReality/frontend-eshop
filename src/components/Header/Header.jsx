import Menu from "../Menu/Menu";
import Search from "../Search/Search";
import AccountSvg from "../svgComponents/account/AccountSvg";
import ProfileSvg from "../svgComponents/profile/ProfileSvg";
import { useContext } from "react";
import { userContext } from "../../context/Context";

import './Header.css'

const Header = ({text, setSearchText}) => {
    const {user, setUser} = useContext(userContext)
    
    return ( 
        <header>
            {text?<div className="headliner"><h1>{text}{user?<>{`,`}<br/>{`${user[0].username}!`}</>:<></>}</h1><Menu user={user} setUser={setUser}/></div>:<></>}
            <Search setSearchText={setSearchText}/>
        </header>
     );
}
 
export default Header;