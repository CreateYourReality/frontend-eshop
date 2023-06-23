import { Link } from "react-router-dom";
import "./Footer.css"
import Shape from "../../assets/img/Shape.svg"
import Search from  "../../assets/img/Search.svg"
const Footer = () => {
    return ( 
        <footer>
            <Link to="/home"><img src={Shape} alt="shape-icon"/></Link>    
            <Link to="/productlist"><img src={Search} alt="Search-icon"/></Link>    
        </footer>
     );
}
 
export default Footer;