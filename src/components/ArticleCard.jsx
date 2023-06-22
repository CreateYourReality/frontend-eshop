import "./ArticleCard.css"
import { Link } from "react-router-dom";

const ArticleCard = (probs) => {
    return (  
        <>
            <img src={probs.img[0]} alt="" />
            <p>{probs.rating}</p>
            <h2>{probs.title}</h2>
            <div>
                <h3>{probs.price}</h3>
                <Link to={`/details/${probs.id}`}>DETAIL</Link>
            </div>
        </>
    );
}
 
export default ArticleCard;