import { useContext } from "react";
import { dataContext } from "../context/Context";

const ProductList = () => {
    const {data,setData} = useContext(dataContext)
    {console.log(data);}

    return ( 
        <section>
            <h2>PRODUCTLIST</h2>
        </section>
     );
}
 
export default ProductList;