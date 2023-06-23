/*import "./ArticleCardAlternative.css"*/
import { Link } from "react-router-dom";

const ArticleCardAlternative = (probs) => {
    return (  
        <>
            <img src={probs.image} alt="" />
            <div className="articleCardInfo">
                <p>{probs.rating}</p>
                <h2>{probs.title}</h2>
                <div>
                    <h3>${probs.price},00</h3>
                </div>
            </div>     
        </>
    );
}
 
export default ArticleCardAlternative;