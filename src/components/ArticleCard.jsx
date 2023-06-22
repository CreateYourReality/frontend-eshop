import "./ArticleCard.css"

const ArticleCard = (probs) => {
    return (  
        <>
            <div className="imgDiv">
                <img src={probs.image} alt="" />
            </div>
            <div>
                <p>{probs.rating}</p>
                <h2>{probs.title}</h2>
            <div>
                <h3>${probs.price},00</h3>
            </div>
            </div>     
            </>
    );
}
 
export default ArticleCard;