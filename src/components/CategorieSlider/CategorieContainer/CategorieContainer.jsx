import './CategorieContainer.css'
import categorieIcon1 from "../../../assets/img/categorieIcon1.svg"
import categorieIcon2 from "../../../assets/img/categorieIcon2.svg"
import categorieIcon3 from "../../../assets/img/categorieIcon3.svg"
import categorieIcon4 from "../../../assets/img/categorieIcon4.svg"
import categorieIcon5 from "../../../assets/img/categorieIcon5.svg"

const CategorieContainer = ({text, setCategorie, i}) => {
    const categorieIcon = i===1?categorieIcon1:i===2?categorieIcon2:i===3?categorieIcon3:i===4?categorieIcon4:categorieIcon5
    
    return ( 
        <div className="categorieContainer" onClick={() => setCategorie([[text],[],[]])}>
            <div className="img-wrapper">
                <img src={categorieIcon} alt={`${text}-Logo`}/>
            </div>
            <p>{text}</p>
        </div>
     );
}
 
export default CategorieContainer;