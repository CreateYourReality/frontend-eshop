import { useState } from "react";
import AccountSvg from "../svgComponents/account/AccountSvg";
import { Link, NavLink } from "react-router-dom";
import Logout from "../svgComponents/logout/Logout";
import { useContext } from "react";
import { shoppingcartContext, favoritesContext } from "../../context/Context";
import './Menu.css'

const Menu = ({user, setUser}) => {
    const [open, setOpen] = useState(false)
    const { setShoppingcart } = useContext(shoppingcartContext)
    const { setFavorites } = useContext(favoritesContext);
    return ( 
        <>
        <div className="dd-menu" onClick={() => setOpen(prev => !prev)} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <div className="svg-wrapper">
                {user?<AccountSvg />:<NavLink to="/login"><Logout /></NavLink>}
            </div>
            {user?
                <div className={open?"dd-menu-list visible":"dd-menu-list"}>
                <div className="dd-menu-item"><NavLink to="/profile">Profile</NavLink></div>
                {user[0].username === "Admin"?<div className="dd-menu-item"><NavLink to="/adminpanel">Adminpanel</NavLink></div>:<></>}
                <div className="dd-menu-item" onClick={() => setUser(undefined)&setShoppingcart([])&setFavorites([])}>Logout</div>
                </div>:<></>}
        </div>
        </>
     );
}
 
export default Menu;


/* header -> menu -> dropdown/user?admin?gast?=> gast=login user=Account admin=backend

DP's

gast 
login /login

Account 
Profil /profile
Bestellungen/History /history
Logout 

Admin 
Backend /backend
Logout

*/