import { useContext } from "react";
import { dataContext } from "../context/Context";

const Details = () => {
    const {data,setData} = useContext(dataContext)
    {console.log(data);}


    return ( 
        <section>
            <h2>DETAILS</h2>
        </section>
     );
}
 
export default Details;