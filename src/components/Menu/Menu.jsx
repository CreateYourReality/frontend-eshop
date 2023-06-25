import { useState } from "react";
import AccountSvg from "../svgComponents/account/AccountSvg";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
    const [open, setOpen] = useState(false)
    return ( 
        <>
        <div className="dd-menu" onClick={() => setOpen(prev => !prev)} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <div className="svg-wrapper">
                <AccountSvg />
            </div>
            <div className={open?"dd-menu-list visible":"dd-menu-list"}>
                <div className="dd-menu-item"><NavLink to="/login">Login</NavLink></div>
            </div>
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