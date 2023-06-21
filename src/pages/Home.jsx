import { useContext } from "react";
import { dataContext } from "../context/Context";

const Home = () => {
    const {data,setData} = useContext(dataContext)
    {console.log(data);}

    return (  
        <section>
            <h1>HOME</h1>
        </section>
    );
}
 
export default Home;