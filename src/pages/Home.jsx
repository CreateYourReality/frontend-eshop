import { useContext } from "react";
import { dataContext } from "../context/Context";
import Search from "../components/Search/Search";

const Home = () => {
    const {data,setData} = useContext(dataContext)
    {console.log(data);}

    return (  
        <section>
            <Search />
            <h1>HOME</h1>
        </section>
    );
}
 
export default Home;