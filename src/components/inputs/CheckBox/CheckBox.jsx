import { useEffect, useState } from "react";
import "./CheckBox.css"

const CheckBox = ({text, setFilterType}) => {
    const [check, setCheck] = useState(false)

    useEffect(() => {
        check?setFilterType((prev)=>[...prev, text]):setFilterType((prev)=>{prev.splice(prev.indexOf(text), 1); return prev})
    }, [check])

    return ( 
        <div onClick={() => {setCheck((prev) => !prev)}} className={check?"checkbox checked":"checkbox"}>
            {text}
        </div>
     );
}
 
export default CheckBox;