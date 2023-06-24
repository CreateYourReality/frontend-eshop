import "./ArticleCard.css"
import star from '../../assets/img/star.png'
import frame from '../../assets/img/Frame.svg'
import { useState } from "react"
const ArticleCard = (probs) => {
    if (probs.count) {
        const [counter, setCounter] = useState(probs.count)
    }
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
                    {probs.count?<p>Anzahl:{probs.count}</p>:<></>}
                    {probs.count?<p>Gesamtpreis:{probs.count * probs.price}</p>:<></>}
                </div>
            </div>
            <div className="frame-img">
                <img src={frame} alt="frame-icon"/>    
            </div>  
            </>
    );
}
 
export default ArticleCard;