import { Link } from "react-router-dom";
import "./Footer.css"
const Footer = () => {
    return ( 
        <footer>
            <Link to="/home">HOME</Link>    
            <Link to="/productlist">LIST</Link>    
        </footer>
     );
}
 
export default Footer;