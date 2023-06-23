import "./CheckBox.css"
import { useContext, useEffect, useState } from "react";
import { filterContext } from "../../../context/Context";

const CheckBox = ({text, uniqueCheck, setUniqueCheck, setFilterType, filterType, unique=false}) => {
    const [check, setCheck] = useState(false)
    const {filter, setFilter} = useContext(filterContext);
    useEffect(() => {
        filter.forEach((filter) => {filter.includes(text)?setCheck(true):null})

        unique?filter[1].length!==0?setUniqueCheck(filter[1][0]):null:null
    }, [])
^
    useEffect(() => {
        if (!unique) {
        check?setFilterType((prev)=>[...prev, text]):setFilterType((prev)=>{prev.splice(prev.indexOf(text), 1); return prev})} 
        else {
            uniqueCheck?setFilterType([uniqueCheck]):setFilterType([])
        }
    }, [check, uniqueCheck])

    return ( 
        unique
        ?
        <div onClick={() => {uniqueCheck===text?setUniqueCheck(''):setUniqueCheck(text)}} className={uniqueCheck===text?"checkbox checked":"checkbox"} >
            {text}
        </div>
        :
        <div onClick={() => {setCheck((prev) => !prev)}} className={check?"checkbox checked":"checkbox"}>
            {text}
        </div>
     );
}
 
export default CheckBox;