import { useEffect, useState } from "react";
import "./CheckBox.css"

const CheckBox = ({text, uniqueCheck, setUniqueCheck, setFilterType, filterType, unique=false}) => {
    const [check, setCheck] = useState(false)

    useEffect(() => {
        if (!unique) {
        check?setFilterType((prev)=>[...prev, text]):setFilterType((prev)=>{prev.splice(prev.indexOf(text), 1); return prev})} 
        else {
            filterType[0]!==text?setFilterType([text]):setFilterType([])
        }
    }, [check])

    return ( 
        unique
        ?
        <div onClick={() => {setCheck((prev) => !prev);setUniqueCheck(text)}} className={uniqueCheck===text&&filterType[0]===text?"checkbox checked":"checkbox"} >
            {text}
        </div>
        :
        <div onClick={() => {setCheck((prev) => !prev)}} className={check?"checkbox checked":"checkbox"}>
            {text}
        </div>
     );
}
 
export default CheckBox;