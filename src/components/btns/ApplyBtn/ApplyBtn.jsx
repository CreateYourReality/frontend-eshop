import { NavLink } from "react-router-dom";

const ApplyBtn = ({setOpen, link, text}) => {
    return ( 
        <NavLink onClick={() => setOpen(false)} to={link} className={"btn"}>{text}</NavLink>
     );
}
 
export default ApplyBtn;