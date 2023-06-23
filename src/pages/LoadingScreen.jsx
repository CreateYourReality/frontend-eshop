import { useContext, useEffect } from "react";
import { loadingContext,dataContext } from "../context/Context";
const LoadingScreen = () => {
    const {setData} = useContext(dataContext);
    const {setLoading} = useContext(loadingContext);


    useEffect(() => {
    //fetch("https://dummyjson.com/products")
     fetch("../src/assets/FakeShop/test.json")
          .then((res) => res.json())
          .then((data) => {
            setData(data);
          });
      }, []);

    const DeactivateLoading = () => {
        setTimeout(stopLoading, 2500);
    }

    const stopLoading = () => {
        setLoading(false);
    }

    DeactivateLoading();

    return ( 
        <section>
            <h2>LOADING</h2>
        </section>
     );
}
 
export default LoadingScreen;