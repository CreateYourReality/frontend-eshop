import { NavLink } from "react-router-dom";
import { filterContext } from "../../../context/Context";
import { useContext } from "react";



const ApplyBtn = ({ myFilters ,setOpen, link, text}) => {
    const {filter, setFilter} = useContext(filterContext);

    return ( 
        <NavLink onClick={() => setOpen(false)&setFilter(myFilters)} to={link} className={"example"}>{text}</NavLink>
     );
}
 
export default ApplyBtn;