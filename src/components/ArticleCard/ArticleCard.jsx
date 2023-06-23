import "./ArticleCard.css"
import star from '../../assets/img/star.png'
import frame from '../../assets/img/Frame.svg'
const ArticleCard = (probs) => {
    return (  
        <>
            <figure>
                <div className="imgDiv">
                    <img src={probs.image} alt={probs.title} />
                </div>
                <figcaption><img
							className='star'
							src={star}
							alt='Star'
							/><p>{probs.rating}</p></figcaption>
                </figure>
            <div>
                <h2>{probs.title}</h2>
                <div>
                    <h3>${probs.price},00</h3>
                </div>
            </div>
            <div className="frame-img">
                <img src={frame} alt="frame-icon"/>    
            </div>  
            </>
    );
}
 
export default ArticleCard;